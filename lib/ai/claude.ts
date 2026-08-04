// Mock implementation - returns realistic mock data
export async function generateSummary(
  metrics: Record<string, number>,
  program: string
): Promise<string> {
  try {
    // Mock summary generation
    const summaries: Record<string, string> = {
      healthcare: `Our ${program} program has reached ${metrics.families_served || 15430} families across ${metrics.countries || 8} countries. With ${metrics.volunteers || 847} dedicated volunteers, we've provided critical medical support and preventative care initiatives. The program continues to expand its impact in underserved regions.`,
      education: `Through our ${program} program, we've supported educational initiatives benefiting over ${metrics.families_served || 15430} students. Our network of ${metrics.volunteers || 847} volunteers has established learning centers in ${metrics.countries || 8} communities. We remain committed to expanding educational access and opportunity.`,
      food_security: `Our ${program} initiative has delivered nutritional support to ${metrics.families_served || 15430} vulnerable families. With collaboration from ${metrics.volunteers || 847} volunteers across ${metrics.countries || 8} regions, we've established sustainable food security programs. The impact continues to grow monthly.`,
    };

    return summaries[program] || `${program} program continues making impact across communities`;
  } catch (error) {
    console.error("AI summary error:", error);
    return `${program} program continues making impact across communities`;
  }
}

export async function generateRecommendations(
  userType: "donor" | "volunteer",
  interests: string[]
): Promise<string[]> {
  try {
    // Mock recommendations based on user type and interests
    const donorRecommendations: Record<string, string[]> = {
      default: ["Healthcare Program", "Education Initiative", "Food Security"],
      healthcare: ["Medical Relief Program", "Health Clinics", "Maternal Care"],
      education: ["School Construction", "Scholarship Fund", "Teacher Training"],
      social: ["Community Centers", "Social Services", "Youth Programs"],
    };

    const volunteerRecommendations: Record<string, string[]> = {
      default: ["Field Healthcare", "Teaching Programs", "Food Distribution"],
      healthcare: ["Medical Missions", "Health Awareness", "Clinic Support"],
      education: ["Tutoring Programs", "School Support", "Literacy Programs"],
      social: ["Community Outreach", "Mentorship", "Social Work"],
    };

    const key = interests[0]?.toLowerCase() || "default";
    const recommendations = userType === "donor" ? donorRecommendations : volunteerRecommendations;
    return recommendations[key] || recommendations.default;
  } catch (error) {
    console.error("Recommendations error:", error);
    return ["Healthcare", "Education", "Food Aid"];
  }
}

export async function detectAnomalies(
  metrics: Record<string, number>,
  baseline: Record<string, number>
): Promise<Array<{ metric: string; change: number; severity: string }>> {
  try {
    const changes = Object.entries(metrics).map(([key, value]) => ({
      metric: key,
      change: baseline[key] ? ((value - baseline[key]) / baseline[key]) * 100 : 0,
    }));

    const anomalies = changes.filter((c) => Math.abs(c.change) > 20);

    return anomalies.map((a) => ({
      metric: a.metric,
      change: a.change,
      severity: Math.abs(a.change) > 50 ? "high" : "medium",
    }));
  } catch (error) {
    console.error("Anomaly detection error:", error);
    return [];
  }
}
