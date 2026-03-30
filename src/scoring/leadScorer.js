function calculateLeadScore(lead) {
  let score = 0;

  // Email-Engagement (max 30 Punkte)
  score += Math.min(lead.email_open_count * 10, 20);
  score += Math.min(lead.email_click_count * 5, 10);

  // Anruf-Engagement (max 40 Punkte)
  if (lead.call_status === 'qualified') {
    score += 40;
  } else if (lead.call_status === 'interested') {
    score += 20;
  } else if (lead.call_status === 'no_answer') {
    score += 5;
  }

  // Firmengröße (max 15 Punkte)
  if (lead.company_size_min && lead.company_size_max) {
    const avgSize = (lead.company_size_min + lead.company_size_max) / 2;
    if (avgSize >= 5 && avgSize <= 50) {
      score += 15;
    } else if (avgSize >= 1 && avgSize <= 100) {
      score += 10;
    }
  }

  // Branche (max 15 Punkte)
  const highValueIndustries = ['healthcare', 'legal', 'consulting', 'finance', 'real estate'];
  if (lead.industry && highValueIndustries.some(ind => lead.industry.toLowerCase().includes(ind))) {
    score += 15;
  } else if (lead.industry) {
    score += 8;
  }

  return Math.min(Math.round(score), 100);
}

module.exports = calculateLeadScore;
