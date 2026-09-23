/**
 * Hirexa Solutions — Sprint Day 1 Interactive Core
 * Scope: Brand Architecture, Persona Switcher & Unified Mega-Menu
 * Solves:
 *   - Problem #1: Too Many Services (Consolidated 3 Strategic Pillars with Instant Directing)
 *   - Problem #2: Service Navigation Unclear (Interactive Solution Finder Wizard + Mega-Menu)
 *   - Problem #9: Audience Paths Not Separated (Top Persona Switcher Bar)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClocks();
  initPersonaSwitcher();
  initSolutionWizard();
  initServicesTabs();
  initMegaMenuLinks();
  initConsultationForm();
});

/* ==========================================================================
   1. Live Global HQ Clock (London HQ Timezone)
   ========================================================================== */
function initLiveClocks() {
  function updateTime() {
    const now = new Date();
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
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   2. Global Pillar Tab Switcher & Directing (Issue #1 & #2)
   ========================================================================== */
window.switchPillarTab = function(pillarName, cardId) {
  const tabBtns = document.querySelectorAll('.pillar-tab-btn');
  const panels = document.querySelectorAll('.pillar-panel');

  // Activate Tab Button
  tabBtns.forEach(b => {
    if (b.getAttribute('data-pillar') === pillarName) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  // Activate Content Panel
  panels.forEach(p => {
    if (p.id === `pillar-${pillarName}`) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  // Smooth scroll to services hub
  const hub = document.getElementById('services-hub');
  if (hub) {
    hub.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // If a specific card was targeted, highlight it
  if (cardId) {
    setTimeout(() => {
      const card = document.getElementById(cardId);
      if (card) {
        card.classList.remove('card-highlight');
        void card.offsetWidth; // trigger reflow
        card.classList.add('card-highlight');
      }
    }, 400);
  }
};

/* ==========================================================================
   3. Persona Switcher (Issue #9)
   ========================================================================== */
function initPersonaSwitcher() {
  const chips = document.querySelectorAll('.persona-chip');
  const personaFeedback = document.getElementById('persona-feedback-toast');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const persona = chip.getAttribute('data-persona');

      // Update persona guidance message
      if (personaFeedback) {
        if (persona === 'employers') {
          personaFeedback.textContent = 'Active Persona: Enterprises & Hirers — Directing to Talent Solutions & Staffing';
        } else if (persona === 'engineering') {
          personaFeedback.textContent = 'Active Persona: Software & Engineering — Directing to Cloud, AI & Software Practice';
        } else if (persona === 'candidates') {
          personaFeedback.textContent = 'Active Persona: Tech Talent & Job Seekers — Directing to Career Opportunities';
        }
        personaFeedback.style.display = 'block';
        setTimeout(() => {
          personaFeedback.style.opacity = '1';
        }, 10);
      }

      // Smooth directing to relevant target
      if (persona === 'employers') {
        window.switchPillarTab('talent');
      } else if (persona === 'engineering') {
        window.switchPillarTab('software');
      } else if (persona === 'candidates') {
        const el = document.getElementById('careers-path-info');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   4. Mega-Menu Directing Links (Issue #1 & #2)
   ========================================================================== */
function initMegaMenuLinks() {
  const pillarLinks = document.querySelectorAll('[data-target-pillar]');
  pillarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPillar = link.getAttribute('data-target-pillar');
      const targetCard = link.getAttribute('data-target-card') || null;
      window.switchPillarTab(targetPillar, targetCard);
    });
  });
}

/* ==========================================================================
   5. "Which Service Do You Need?" 20-Second Guided Wizard (Issues #1 & #2)
   ========================================================================== */
function initSolutionWizard() {
  const wizardBox = document.getElementById('solution-wizard');
  if (!wizardBox) return;

  let currentStep = 1;
  const selections = {
    goal: 'talent',
    volume: 'small'
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
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < 3) {
        currentStep++;
        updateWizardUI();
      } else {
        // Direct to consultation form with pre-filled selection
        const consultSection = document.getElementById('consultation');
        if (consultSection) {
          consultSection.scrollIntoView({ behavior: 'smooth' });
          const serviceSelect = document.getElementById('consult-service');
          if (serviceSelect) {
            if (selections.goal === 'talent') serviceSelect.value = 'Specialised Tech Staffing';
            else if (selections.goal === 'gcc') serviceSelect.value = 'Global Capability Center (BOT)';
            else if (selections.goal === 'software') serviceSelect.value = 'Custom Software & Cloud Engineering';
          }
        }
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
      if (nextBtn) nextBtn.textContent = 'Next: Select Scope →';
    } else if (currentStep === 2) {
      if (prevBtn) prevBtn.style.visibility = 'visible';
      if (nextBtn) nextBtn.textContent = 'Generate Recommended Architecture →';
    } else if (currentStep === 3) {
      if (prevBtn) prevBtn.style.visibility = 'visible';
      if (nextBtn) nextBtn.textContent = 'Book Strategy Call for this Model →';
      renderWizardRecommendation(selections);
    }
  }

  function renderWizardRecommendation(data) {
    const titleEl = document.getElementById('wizard-rec-title');
    const descEl = document.getElementById('wizard-rec-desc');
    const badgeEl = document.getElementById('wizard-rec-badge');

    if (data.goal === 'talent') {
      badgeEl.textContent = 'Recommended Architecture: Specialised Tech Staffing (Pillar 1)';
      titleEl.textContent = 'Agile Contingent & FTE Engineering Pods';
      descEl.textContent = 'Hirexa’s specialized tech talent network provides pre-screened individual engineers and agile pods shortlisted within 48 hours, fully compliant with regional employment laws and zero employer liability.';
    } else if (data.goal === 'gcc') {
      badgeEl.textContent = 'Recommended Architecture: Build-Operate-Transfer BOT (Pillar 2)';
      titleEl.textContent = 'Enterprise Global Capability Center (GCC)';
      descEl.textContent = 'Hirexa establishes your branded captive innovation hub in Bangalore or Warsaw—managing physical infrastructure, legal entity setup, leadership hiring, and 100% transfer of equity at the milestone date.';
    } else if (data.goal === 'software') {
      badgeEl.textContent = 'Recommended Architecture: Custom Software Engineering (Pillar 3)';
      titleEl.textContent = 'End-to-End Digital Product & Cloud Modernization';
      descEl.textContent = 'Hirexa’s dedicated digital engineering practice delivers end-to-end software development, cloud-native microservices, AI/RPA workflows, and UI/UX product design with strict code ownership.';
    }
  }
}

/* ==========================================================================
   6. Services Tabs Direct Clicking (Issue #1)
   ========================================================================== */
function initServicesTabs() {
  const tabBtns = document.querySelectorAll('.pillar-tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pillar = btn.getAttribute('data-pillar');
      window.switchPillarTab(pillar);
    });
  });
}

/* ==========================================================================
   7. Day 1 Consultation Form Handler
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const successState = document.getElementById('consult-success-state');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successState) {
        successState.style.display = 'block';
      }
    });
  }
}
