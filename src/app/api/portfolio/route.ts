import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { ProjectModel } from "@/models/Project";
import { ExperienceModel } from "@/models/Experience";
import { SkillModel } from "@/models/Skill";
import { EducationModel } from "@/models/Education";
import { CertificationModel } from "@/models/Certification";
import { getFullPortfolioPayload, calculatePortfolioMetrics } from "@/lib/data";
import { IPortfolioData } from "@/types/portfolio";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await connectToDatabase();

    if (!db) {
      // Return seed payload when DB is not configured
      const fallbackData = getFullPortfolioPayload();
      return NextResponse.json(fallbackData, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      });
    }

    // Parallel aggregated fetch with .lean() execution for high throughput
    const [projects, experience, skills, education, certifications] = await Promise.all([
      ProjectModel.find({}).sort({ order: 1, createdAt: -1 }).lean(),
      ExperienceModel.find({}).sort({ order: 1, createdAt: -1 }).lean(),
      SkillModel.find({}).sort({ order: 1 }).lean(),
      EducationModel.find({}).sort({ order: 1 }).lean(),
      CertificationModel.find({}).sort({ order: 1 }).lean(),
    ]);

    // If database is empty, seed automatically or return fallback
    if (!projects.length && !experience.length) {
      const fallbackData = getFullPortfolioPayload();
      return NextResponse.json(fallbackData);
    }

    const metrics = calculatePortfolioMetrics({
      projects: projects as any,
      experience: experience as any,
      education: education as any,
      certifications: certifications as any,
    });

    const payload: IPortfolioData = {
      metrics,
      skills: skills as any,
      projects: projects as any,
      experience: experience as any,
      education: education as any,
      certifications: certifications as any,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error: any) {
    console.error("Aggregation API Error:", error.message);
    const fallbackData = getFullPortfolioPayload();
    return NextResponse.json(fallbackData, { status: 200 });
  }
}
