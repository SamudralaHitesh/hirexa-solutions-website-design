/**
 * Hirexa Solutions — Redesign Interactive Application Core
 * Powers: Persona Routing, Solution Wizard, Careers Search,
 * Lead Qualification Engine, Global Office Clocks & Real-time Funnel HUD
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClocks();
  initPersonaSwitcher();
  initSolutionWizard();
  initServicesTabs();
  initJobSearchEngine();
  initCandidateModal();
  initGlobalOfficeMap();
  initRfpForm();
  initAnalyticsHud();
  initFaqAccordion();
});

/* ==========================================================================
   1. Live Global Office Clocks (Issue #11)
   ========================================================================== */
function initLiveClocks() {
  const timezones = {
    sf: 'America/Los_Angeles',
    london: 'Europe/London',
    frankfurt: 'Europe/Berlin',
    warsaw: 'Europe/Warsaw',
    bangalore: 'Asia/Kolkata'
  };

  function updateTimes() {
    const now = new Date();
    
    // Top Bar General Clock
    const topClock = document.getElementById('global-live-clock');
    if (topClock) {
      topClock.textContent = now.toLocaleTimeString('en-US', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }) + ' GMT (London HQ)';
    }

    // Individual Office Cards
    document.querySelectorAll('[data-timezone]').forEach(el => {
      const tz = el.getAttribute('data-timezone');
      try {
        el.textContent = now.toLocaleTimeString('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      } catch (e) {
        // Fallback
      }
    });
  }

  updateTimes();
  setInterval(updateTimes, 1000);
}

/* ==========================================================================
   2. Persona Switcher (Issue #9)
   ========================================================================== */
function initPersonaSwitcher() {
  const chips = document.querySelectorAll('.persona-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const persona = chip.getAttribute('data-persona');
      
      logFunnelEvent('persona_switched', { persona: persona });

      // Smooth scroll to relevant primary target if linked
      if (persona === 'employers') {
        const el = document.getElementById('services-hub');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (persona === 'engineering') {
        const el = document.getElementById('software-services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (persona === 'candidates') {
        const el = document.getElementById('careers-portal');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   3. "Which Service Do You Need?" 20-Second Guided Wizard (Issues #1, #2, #15)
   ========================================================================== */
function initSolutionWizard() {
  const wizardBox = document.getElementById('solution-wizard');
  if (!wizardBox) return;

  let currentStep = 1;
  const selections = {
    goal: 'talent',
    volume: 'medium'
  };

  const stepPanes = wizardBox.querySelectorAll('.wizard-step-pane');
  const stepIndicators = wizardBox.querySelectorAll('.step-indicator');
  const nextBtn = document.getElementById('wizard-next-btn');
  const prevBtn = document.getElementById('wizard-prev-btn');

  // Choice Cards Selection
  wizardBox.querySelectorAll('.wizard-choice-card').forEach(card => {
    card.addEventListener('click', () => {
      const parent = card.closest('.wizard-options-grid');
      parent.querySelectorAll('.wizard-choice-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      
      const key = card.getAttribute('data-choice-key');
      const val = card.getAttribute('data-choice-val');
      selections[key] = val;

      logFunnelEvent('wizard_option_selected', { step: currentStep, choiceKey: key, value: val });
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < 3) {
        currentStep++;
        updateWizardUI();
      } else {
        // Open RFP form pre-filled
        openRfpModalWithSelection(selections);
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  function updateWizardUI() {
    stepPanes.forEach(p => p.classList.remove('active'));
    stepIndicators.forEach(ind => {
      const step = parseInt(ind.getAttribute('data-step'), 10);
      if (step <= currentStep) ind.classList.add('active');
      else ind.classList.remove('active');
    });

    const currentPane = wizardBox.querySelector(`[data-step-pane="${currentStep}"]`);
    if (currentPane) currentPane.classList.add('active');

    if (currentStep === 1) {
      if (prevBtn) prevBtn.style.visibility = 'hidden';
      if (nextBtn) nextBtn.textContent = 'Next: Select Scale →';
    } else if (currentStep === 2) {
      if (prevBtn) prevBtn.style.visibility = 'visible';
      if (nextBtn) nextBtn.textContent = 'Generate Recommended Solution →';
    } else if (currentStep === 3) {
      if (prevBtn) prevBtn.style.visibility = 'visible';
      if (nextBtn) nextBtn.textContent = 'Request Custom Proposal for this Solution →';
      renderWizardRecommendation(selections);
    }

    logFunnelEvent('wizard_step_transition', { step: currentStep });
  }

  function renderWizardRecommendation(data) {
    const titleEl = document.getElementById('wizard-rec-title');
    const descEl = document.getElementById('wizard-rec-desc');
    const badgeEl = document.getElementById('wizard-rec-badge');

    if (data.goal === 'talent') {
      badgeEl.textContent = 'Recommended Architecture: Specialised Tech Staffing';
      titleEl.textContent = 'Agile Contingent & FTE Engineering Pods';
      descEl.textContent = 'Based on your hiring scope, Hirexa’s specialized tech talent network provides pre-vetted engineers shortlisted within 48 hours, fully compliant with regional payroll and IP protections.';
    } else if (data.goal === 'gcc') {
      badgeEl.textContent = 'Recommended Architecture: Build-Operate-Transfer (BOT)';
      titleEl.textContent = 'Enterprise Global Capability Center (GCC)';
      descEl.textContent = 'Hirexa will establish your turn-key offshore innovation hub in Bangalore or Warsaw—handling legal compliance, state-of-the-art infrastructure, talent ingestion, and transfer of ownership within 12–24 months.';
    } else if (data.goal === 'software') {
      badgeEl.textContent = 'Recommended Architecture: Dedicated Digital Engineering';
      titleEl.textContent = 'End-to-End Custom Software & Cloud Modernization';
      descEl.textContent = 'Hirexa’s software practice will design, engineer, and deploy your product milestone with full CI/CD, microservices architecture, and dedicated scrum masters.';
    } else if (data.goal === 'rpo') {
      badgeEl.textContent = 'Recommended Architecture: Enterprise RPO';
      titleEl.textContent = 'Full Lifecycle Recruitment Process Outsourcing';
      descEl.textContent = 'Scale your internal hiring capability with an embedded Hirexa talent acquisition squad equipped with AI sourcing, global market benchmarking, and guaranteed SLA fulfillment.';
    }
  }
}

/* ==========================================================================
   4. Services Hub Pillar Tabs (Issues #1, #2, #12)
   ========================================================================== */
function initServicesTabs() {
  const tabs = document.querySelectorAll('.pillar-tab-btn');
  const panels = document.querySelectorAll('.pillar-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPillar = tab.getAttribute('data-pillar');
      const activePanel = document.getElementById(`pillar-${targetPillar}`);
      if (activePanel) activePanel.classList.add('active');

      logFunnelEvent('services_tab_viewed', { pillar: targetPillar });
    });
  });
}

/* ==========================================================================
   5. Next-Gen Careers Job Search Engine (Issue #4)
   ========================================================================== */
const JOBS_DATA = [
  {
    id: 'job-01',
    title: 'Senior Cloud Solutions Architect (AWS / Azure)',
    department: 'Cloud & Infrastructure',
    location: 'London, UK (Hybrid)',
    workType: 'Hybrid',
    salary: '£95,000 - £120,000 + Equity',
    experience: '7+ Years',
    techStack: ['AWS', 'Kubernetes', 'Terraform', 'Microservices'],
    description: 'Lead enterprise cloud migration architectures for Fortune 500 financial clients with high-availability microservices.'
  },
  {
    id: 'job-02',
    title: 'Lead Full-Stack React / Node.js Engineer',
    department: 'Software Engineering',
    location: 'Bangalore, India (Remote Available)',
    workType: 'Remote',
    salary: '₹35,00,000 - ₹48,00,000',
    experience: '5+ Years',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
    description: 'Architect scalable web platforms and real-time dashboard applications for global SaaS enterprise clients.'
  },
  {
    id: 'job-03',
    title: 'Principal AI & Machine Learning Engineer',
    department: 'Data & AI',
    location: 'Berlin, Germany (Hybrid)',
    workType: 'Hybrid',
    salary: '€105,000 - €130,000',
    experience: '6+ Years',
    techStack: ['Python', 'PyTorch', 'LLMs', 'MLOps', 'FastAPI'],
    description: 'Design and deploy production-grade LLM pipelines, autonomous agents, and predictive computer vision pipelines.'
  },
  {
    id: 'job-04',
    title: 'DevOps & Site Reliability Engineer (SRE)',
    department: 'Cloud & Infrastructure',
    location: 'Warsaw, Poland (Remote)',
    workType: 'Remote',
    salary: '180,000 - 240,000 PLN',
    experience: '4+ Years',
    techStack: ['Docker', 'K8s', 'Datadog', 'ArgoCD', 'CI/CD'],
    description: 'Maintain zero-downtime multi-region deployments, security posture, and infrastructure-as-code automation.'
  },
  {
    id: 'job-05',
    title: 'Staff Enterprise Product Designer (UI/UX)',
    department: 'Product & Design',
    location: 'San Francisco, USA (Hybrid)',
    workType: 'Hybrid',
    salary: '$160,000 - $195,000',
    experience: '6+ Years',
    techStack: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
    description: 'Transform complex enterprise data workflows into intuitive, beautiful B2B interfaces with design tokens.'
  },
  {
    id: 'job-06',
    title: 'RPA & Intelligent Automation Consultant',
    department: 'Data & AI',
    location: 'Hyderabad, India (On-site)',
    workType: 'On-site',
    salary: '₹22,00,000 - ₹30,00,000',
    experience: '4+ Years',
    techStack: ['UiPath', 'Power Automate', 'Python', 'OCR'],
    description: 'Design end-to-end bots that automate manual banking, payroll, and invoice ingestion operations.'
  }
];

function initJobSearchEngine() {
  const searchInput = document.getElementById('job-search-input');
  const deptFilter = document.getElementById('job-dept-filter');
  const typeFilter = document.getElementById('job-type-filter');
  const jobsListContainer = document.getElementById('jobs-list-container');
  const jobCountEl = document.getElementById('job-results-count-text');

  if (!jobsListContainer) return;

  function renderJobs() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const dept = deptFilter ? deptFilter.value : 'all';
    const type = typeFilter ? typeFilter.value : 'all';

    const filtered = JOBS_DATA.filter(job => {
      const matchesQuery = !query || 
        job.title.toLowerCase().includes(query) || 
        job.techStack.some(t => t.toLowerCase().includes(query)) ||
        job.location.toLowerCase().includes(query);

      const matchesDept = (dept === 'all') || (job.department === dept);
      const matchesType = (type === 'all') || (job.workType === type);

      return matchesQuery && matchesDept && matchesType;
    });

    if (jobCountEl) {
      jobCountEl.textContent = `Showing ${filtered.length} open position${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      jobsListContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
          <h4 style="color: #fff; margin-bottom: 8px;">No matching roles found</h4>
          <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 16px;">Try adjusting your keyword or filter options, or submit your CV to our general talent pool.</p>
          <button class="btn btn-outline-cyan btn-sm" onclick="openCandidateModal('General Talent Pool')">Submit Spontaneous Application</button>
        </div>
      `;
      return;
    }

    jobsListContainer.innerHTML = filtered.map(job => `
      <div class="job-card">
        <div class="job-title-col">
          <h4>${job.title}</h4>
          <span class="job-department">${job.department}</span>
          <div class="tech-tags-group" style="margin-top: 8px;">
            ${job.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="job-meta-col">
          <div class="job-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${job.location}
          </div>
          <div class="job-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${job.workType} • ${job.experience}
          </div>
        </div>

        <div class="job-salary-col">
          <span class="salary-amount">${job.salary}</span>
          <span class="salary-tag">✓ Transparent Band</span>
        </div>

        <div class="job-action-col">
          <button class="btn btn-primary btn-sm" onclick="openCandidateModal('${job.title}', '${job.id}')">
            Apply Now
          </button>
        </div>
      </div>
    `).join('');
  }

  if (searchInput) searchInput.addEventListener('input', () => {
    renderJobs();
    logFunnelEvent('job_search_input', { query: searchInput.value });
  });

  if (deptFilter) deptFilter.addEventListener('change', () => {
    renderJobs();
    logFunnelEvent('job_filter_dept', { dept: deptFilter.value });
  });

  if (typeFilter) typeFilter.addEventListener('change', () => {
    renderJobs();
    logFunnelEvent('job_filter_type', { type: typeFilter.value });
  });

  renderJobs();
}

/* ==========================================================================
   6. Structured Candidate Application Modal (Issue #5)
   ========================================================================== */
window.openCandidateModal = function(roleTitle = 'Software Engineer', roleId = 'general') {
  const modal = document.getElementById('candidate-modal');
  if (!modal) return;

  const titleEl = document.getElementById('candidate-modal-role');
  if (titleEl) titleEl.textContent = roleTitle;

  const roleInput = document.getElementById('candidate-role-hidden');
  if (roleInput) roleInput.value = roleTitle;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  logFunnelEvent('candidate_apply_modal_opened', { role: roleTitle, roleId: roleId });
};

window.closeCandidateModal = function() {
  const modal = document.getElementById('candidate-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

function initCandidateModal() {
  const modal = document.getElementById('candidate-modal');
  if (!modal) return;

  const step1 = document.getElementById('cand-step-1');
  const step2 = document.getElementById('cand-step-2');
  const stepSuccess = document.getElementById('cand-step-success');

  const toStep2Btn = document.getElementById('cand-to-step-2');
  const backStep1Btn = document.getElementById('cand-back-step-1');
  const submitBtn = document.getElementById('cand-submit-btn');

  // Resume Drag & Drop Simulation
  const dropzone = document.getElementById('resume-dropzone');
  const fileInput = document.getElementById('resume-file-input');
  const dropzoneText = document.getElementById('dropzone-text');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        dropzoneText.innerHTML = `<strong>Selected:</strong> ${file.name} (${(file.size/1024).toFixed(1)} KB)`;
        dropzone.style.borderColor = 'var(--accent-emerald)';
        logFunnelEvent('candidate_resume_uploaded', { fileName: file.name, fileSize: file.size });
      }
    });
  }

  if (toStep2Btn) {
    toStep2Btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('cand-name').value;
      const email = document.getElementById('cand-email').value;

      if (!name || !email) {
        alert('Please fill in your name and email to proceed.');
        return;
      }

      step1.classList.remove('active');
      step2.classList.add('active');
      logFunnelEvent('candidate_apply_step_2_reached', { name, email });
    });
  }

  if (backStep1Btn) {
    backStep1Btn.addEventListener('click', (e) => {
      e.preventDefault();
      step2.classList.remove('active');
      step1.classList.add('active');
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const exp = document.getElementById('cand-exp').value;
      const notice = document.getElementById('cand-notice').value;
      const skills = document.getElementById('cand-skills').value;

      step2.classList.remove('active');
      stepSuccess.classList.add('active');

      const appRef = 'HX-' + Math.floor(100000 + Math.random() * 900000);
      const refEl = document.getElementById('cand-app-ref');
      if (refEl) refEl.textContent = appRef;

      logFunnelEvent('candidate_application_submitted', {
        appRef,
        experience: exp,
        noticePeriod: notice,
        skills
      });
    });
  }
}

/* ==========================================================================
   7. Interactive Global Footprint & Office Locator (Issue #11)
   ========================================================================== */
function initGlobalOfficeMap() {
  const regionBtns = document.querySelectorAll('.region-btn');
  const officeCards = document.querySelectorAll('.office-card');
  const mapPins = document.querySelectorAll('.map-hub-pin');

  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      regionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const region = btn.getAttribute('data-region');
      
      officeCards.forEach(card => {
        if (region === 'all' || card.getAttribute('data-region') === region) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      logFunnelEvent('global_office_region_filtered', { region });
    });
  });

  // Map pin clicks highlight corresponding card
  mapPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const country = pin.getAttribute('data-country');
      const targetCard = document.querySelector(`.office-card[data-country="${country}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.borderColor = 'var(--accent-cyan)';
        targetCard.style.boxShadow = '0 0 25px rgba(6, 182, 212, 0.4)';
        setTimeout(() => {
          targetCard.style.borderColor = '';
          targetCard.style.boxShadow = '';
        }, 2500);
      }
      logFunnelEvent('map_pin_clicked', { country });
    });
  });
}

/* ==========================================================================
   8. Multi-Step Lead Qualification RFP Engine (Issues #3, #10, #15)
   ========================================================================== */
function initRfpForm() {
  const rfpForm = document.getElementById('lead-rfp-form');
  if (!rfpForm) return;

  let currentStep = 1;
  const rfpSteps = rfpForm.querySelectorAll('.rfp-step');
  const rfpNextBtn = document.getElementById('rfp-next-btn');
  const rfpBackBtn = document.getElementById('rfp-back-btn');
  const rfpSubmitBtn = document.getElementById('rfp-submit-btn');

  function updateRfpStep() {
    rfpSteps.forEach(s => s.classList.remove('active'));
    const target = rfpForm.querySelector(`[data-rfp-step="${currentStep}"]`);
    if (target) target.classList.add('active');

    if (currentStep === 1) {
      if (rfpBackBtn) rfpBackBtn.style.visibility = 'hidden';
      if (rfpNextBtn) rfpNextBtn.style.display = 'inline-flex';
      if (rfpSubmitBtn) rfpSubmitBtn.style.display = 'none';
    } else if (currentStep === 2) {
      if (rfpBackBtn) rfpBackBtn.style.visibility = 'visible';
      if (rfpNextBtn) rfpNextBtn.style.display = 'inline-flex';
      if (rfpSubmitBtn) rfpSubmitBtn.style.display = 'none';
    } else if (currentStep === 3) {
      if (rfpBackBtn) rfpBackBtn.style.visibility = 'visible';
      if (rfpNextBtn) rfpNextBtn.style.display = 'none';
      if (rfpSubmitBtn) rfpSubmitBtn.style.display = 'inline-flex';
    }

    logFunnelEvent('rfp_form_step', { step: currentStep });
  }

  if (rfpNextBtn) {
    rfpNextBtn.addEventListener('click', () => {
      if (currentStep < 3) {
        currentStep++;
        updateRfpStep();
      }
    });
  }

  if (rfpBackBtn) {
    rfpBackBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateRfpStep();
      }
    });
  }

  if (rfpSubmitBtn) {
    rfpSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = document.getElementById('rfp-service').value;
      const volume = document.getElementById('rfp-volume').value;
      const email = document.getElementById('rfp-email').value;
      const name = document.getElementById('rfp-name').value;
      const company = document.getElementById('rfp-company').value;

      if (!email || !name) {
        alert('Please provide your name and work email.');
        return;
      }

      // Show confirmed state
      rfpSteps.forEach(s => s.classList.remove('active'));
      const successPane = document.getElementById('rfp-step-success');
      if (successPane) successPane.classList.add('active');
      if (rfpNextBtn) rfpNextBtn.style.display = 'none';
      if (rfpBackBtn) rfpBackBtn.style.display = 'none';
      if (rfpSubmitBtn) rfpSubmitBtn.style.display = 'none';

      logFunnelEvent('rfp_lead_submitted', {
        service,
        volume,
        company,
        email,
        qualificationScore: volume === '20+' ? 'Tier 1 Enterprise' : 'Tier 2 Growth',
        timestamp: new Date().toISOString()
      });
    });
  }
}

window.openRfpModalWithSelection = function(data) {
  const rfpSection = document.getElementById('request-rfp');
  if (rfpSection) {
    rfpSection.scrollIntoView({ behavior: 'smooth' });
    const serviceSelect = document.getElementById('rfp-service');
    if (serviceSelect && data.goal) {
      if (data.goal === 'talent') serviceSelect.value = 'Specialised Tech Staffing';
      else if (data.goal === 'gcc') serviceSelect.value = 'Global Capability Center (BOT)';
      else if (data.goal === 'software') serviceSelect.value = 'Custom Software Engineering';
      else if (data.goal === 'rpo') serviceSelect.value = 'Enterprise RPO';
    }
  }
};

/* ==========================================================================
   9. Real-Time Funnel Analytics HUD (Issue #15)
   ========================================================================== */
function initAnalyticsHud() {
  const trigger = document.getElementById('hud-trigger');
  const modal = document.getElementById('hud-modal');
  const closeBtn = document.getElementById('hud-close-btn');

  if (trigger && modal) {
    trigger.addEventListener('click', () => {
      modal.classList.toggle('active');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
}

window.logFunnelEvent = function(eventName, payload = {}) {
  const time = new Date().toLocaleTimeString('en-US', { hour12: false });
  console.log(`[Hirexa Funnel Event] ${time} -> ${eventName}:`, payload);

  const logStream = document.getElementById('hud-log-stream');
  if (logStream) {
    const row = document.createElement('div');
    row.className = 'hud-event-row';
    row.innerHTML = `
      <span class="hud-event-time">${time}</span>
      <span class="hud-event-name">${eventName}</span>: 
      <span style="color:#94a3b8">${JSON.stringify(payload).replace(/[{}]/g, '')}</span>
    `;
    logStream.insertBefore(row, logStream.firstChild);
  }
};

/* ==========================================================================
   10. FAQ Accordions (Issue #12)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
          logFunnelEvent('faq_opened', { question: question.textContent.trim() });
        }
      });
    }
  });
}
