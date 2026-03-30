CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(255) NOT NULL,
  company_website VARCHAR(512),
  company_size_min INT,
  company_size_max INT,
  industry VARCHAR(100),
  job_posting_url TEXT,
  job_posting_title VARCHAR(255),
  job_posting_date TIMESTAMP,

  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(20),
  contact_title VARCHAR(100),

  source VARCHAR(50) NOT NULL,
  source_job_id VARCHAR(255),

  status VARCHAR(50) DEFAULT 'new',
  score INT DEFAULT 0,

  email_sequence_started_at TIMESTAMP,
  email_sequence_completed_at TIMESTAMP,
  last_email_sent_at TIMESTAMP,
  email_open_count INT DEFAULT 0,
  email_click_count INT DEFAULT 0,

  call_attempted_at TIMESTAMP,
  call_status VARCHAR(50),
  call_recording_url TEXT,
  call_transcript TEXT,
  call_notes TEXT,

  demo_scheduled_at TIMESTAMP,
  demo_calendly_link VARCHAR(512),
  demo_google_event_id VARCHAR(255),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT email_valid CHECK (contact_email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
  CONSTRAINT score_valid CHECK (score >= 0 AND score <= 100)
);

CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_email ON leads(contact_email);
CREATE INDEX idx_leads_company ON leads(company_name);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_score ON leads(score DESC);
