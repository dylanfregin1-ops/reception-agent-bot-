CREATE TABLE email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  campaign_type VARCHAR(50) NOT NULL,
  email_subject VARCHAR(255),
  email_body TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  sent_at TIMESTAMP,
  opened_at TIMESTAMP,
  clicked_at TIMESTAMP,
  ai_personalization_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_campaigns_lead ON email_campaigns(lead_id);
CREATE INDEX idx_campaigns_status ON email_campaigns(status);
CREATE INDEX idx_campaigns_type ON email_campaigns(campaign_type);

CREATE TABLE call_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  call_status VARCHAR(50) NOT NULL,
  duration_seconds INT,
  transcript TEXT,
  recording_url TEXT,
  ai_analysis JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_call_logs_lead ON call_logs(lead_id);
CREATE INDEX idx_call_logs_status ON call_logs(call_status);
