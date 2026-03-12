<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo-nav">Towana's</div>
        <button @click="openContactModal" class="contact-btn-nav">Contact Us</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="logo-main">
          <h1 class="logo-title">Towana's</h1>
          <h2 class="logo-subtitle">MOBILE NOTARY <span class="ampersand">&</span> BUSINESS SERVICES</h2>
        </div>
        <p class="hero-description">
          Professional notary services at your doorstep. Reliable, fast, and available throughout Alabama.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Professional</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Available</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">AL</div>
            <div class="stat-label">Wide Coverage</div>
          </div>
        </div>
        <button @click="openContactModal" class="cta-button">
          Book a Service
          <span class="arrow">→</span>
        </button>
      </div>
      <div class="hero-image">
        <img src="/src/assets/notary.png" alt="Notary Services" class="notary-illustration" />
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">Complete notary solutions for your legal and business needs</p>
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.title">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <h2 class="section-title">Why Choose Us?</h2>
          <div class="features-grid">
            <div class="feature">
              <div class="feature-icon">🚗</div>
              <h3>Mobile Service</h3>
              <p>We come to you, wherever you are in Alabama</p>
            </div>
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <h3>Fast & Reliable</h3>
              <p>Professional and efficient service every time</p>
            </div>
            <div class="feature">
              <div class="feature-icon">✓</div>
              <h3>Certified</h3>
              <p>Licensed notary with years of experience</p>
            </div>
            <div class="feature">
              <div class="feature-icon">📱</div>
              <h3>Available</h3>
              <p>Flexible hours to fit your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coverage Section -->
    <section class="coverage">
      <div class="container">
        <h2 class="section-title">Coverage Area</h2>
        <div class="coverage-info">
          <div class="coverage-icon">📍</div>
          <h3>Serving Alabama State at Large</h3>
          <p>We serve the entire state of Alabama with the same level of professionalism</p>
        </div>
      </div>
    </section>

    <!-- Contact Modal -->
    <Transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeContactModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeContactModal">&times;</button>
          <h3 class="modal-title">Book Your Service</h3>
          
          <form @submit.prevent="handleSubmit" class="booking-form">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="formData.firstName" 
                  required
                  placeholder="Your first name"
                />
              </div>
              
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="formData.lastName" 
                  required
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone" 
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="documentType">Document Type</label>
              <select id="documentType" v-model="formData.documentType" required>
                <option value="">Select a type</option>
                <option value="gnw">GNW</option>
                <option value="bill-of-sale">Bill of Sale</option>
                <option value="poa">Power of Attorney (PoA)</option>
                <option value="marriage-cert">Marriage Certificate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  v-model="formData.needsMobileService"
                />
                <span>I need mobile service</span>
              </label>
            </div>

            <div class="form-group">
              <label for="additionalServices">Additional Services</label>
              <textarea 
                id="additionalServices" 
                v-model="formData.additionalServices"
                rows="4"
                placeholder="Describe your additional needs..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              <span v-else>Submit Request</span>
            </button>

            <div v-if="submitStatus" :class="['status-msg', submitStatus]">
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h3>Towana's</h3>
            <p>Mobile Notary & Business Services</p>
          </div>
          <div class="footer-contact">
            <p>📧 www.tmnbs.com</p>
            <p>📍 Alabama State at Large</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Towana's Mobile Notary & Business Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const showModal = ref(false)
const loading = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null
const submitMessage = ref('')

const services = [
  {
    icon: '📄',
    title: 'General Notary Work',
    description: 'Comprehensive notarization services for all your official documents and legal needs'
  },
  {
    icon: '📋',
    title: 'Bill of Sale',
    description: 'Expert notarization of sales contracts for vehicles, boats, and personal property'
  },
  {
    icon: '⚖️',
    title: 'Power of Attorney',
    description: 'Secure notarization of legal powers of attorney for financial and healthcare decisions'
  },
  {
    icon: '💍',
    title: 'Marriage Certificates',
    description: 'Official certification and notarization of marriage documents and civil records'
  },
  {
    icon: '✍️',
    title: 'Affidavits & Oaths',
    description: 'Professional administration of sworn statements, affidavits, and legal oaths'
  },
  {
    icon: '🏠',
    title: 'Real Estate Documents',
    description: 'Specialized notarization for property deeds, mortgage papers, and real estate contracts'
  },
  {
    icon: '🎓',
    title: 'Educational Documents',
    description: 'Notarization of diplomas, transcripts, and educational certification documents'
  },
  {
    icon: '💼',
    title: 'Business Contracts',
    description: 'Corporate notarization services for business agreements, contracts, and legal documents'
  },
  {
    icon: '🌍',
    title: 'International Documents',
    description: 'Apostille services and international document authentication for global use'
  }
]

const formData = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  documentType: '',
  needsMobileService: false,
  additionalServices: ''
})

const openContactModal = () => {
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeContactModal = () => {
  showModal.value = false
  document.body.style.overflow = 'auto'
  submitStatus.value = null
}

const handleSubmit = async () => {
  loading.value = true
  submitStatus.value = null

  try {
    const payload = {
      nom: formData.lastName,
      prenom: formData.firstName,
      tel: formData.phone,
      email: formData.email,
      document: formData.documentType,
      service: formData.needsMobileService
    }

    const res = await fetch('http://localhost:3001/api/v1/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!res.ok) throw new Error('Server error')

    submitStatus.value = 'success'
    submitMessage.value = 'Your request has been submitted successfully! We will contact you soon.'

    // Reset form after 2s and close modal
    setTimeout(() => {
      closeContactModal()
      Object.assign(formData, {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        documentType: '',
        needsMobileService: false,
        additionalServices: ''
      })
    }, 2000)
  } catch (err) {
    submitStatus.value = 'error'
    submitMessage.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: #ffffff;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  z-index: 100;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-nav {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Brush Script MT', cursive;
}

.contact-btn-nav {
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-btn-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(156, 39, 176, 0.3);
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem;
  align-items: center;
  min-height: 75vh;
}

.hero-content {
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-main {
  margin-bottom: 2rem;
}

.logo-title {
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Brush Script MT', cursive;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.logo-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  letter-spacing: 3px;
}

.ampersand {
  color: #e91e63;
  font-size: 1.5rem;
}

.hero-description {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}
.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.stat-item {
  flex: 1;
  min-width: 100px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}
.cta-button {
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  color: white;
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 30px rgba(156, 39, 176, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(156, 39, 176, 0.4);
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.notary-illustration {
  width: 400px;
  height: 400px;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 20px 60px rgba(118, 75, 162, 0.3));
  object-fit: contain;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.stamp-circle {
  display: none;
}

.services {
  background: #f8f9fa;
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 700;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%);
  padding: 2.5rem 2rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 24px 64px rgba(156, 39, 176, 0.15);
  border-color: rgba(156, 39, 176, 0.2);
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: all 0.4s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.15) rotate(5deg);
  filter: drop-shadow(0 8px 16px rgba(156, 39, 176, 0.3));
}

.service-card h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.service-card:hover h3 {
  color: #9c27b0;
}

.service-card p {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.service-card:hover p {
  color: #555;
}

/* About Section */
.about {
  padding: 5rem 2rem;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  text-align: center;
  padding: 2rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.feature p {
  color: #666;
  line-height: 1.6;
}

/* Coverage Section */
.coverage {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 2rem;
  color: white;
}

.coverage .section-title {
  color: white;
}

.coverage-info {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.coverage-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.coverage-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.coverage-info p {
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.6;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #333;
}

.modal-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 600;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #555;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #9c27b0;
  box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-weight: 500;
  color: #555;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #9c27b0;
}

.submit-btn {
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(156, 39, 176, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.status-msg {
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease;
}

.status-msg.success {
  background: #e8f5e9;
  color: #2e7d32;
}

.status-msg.error {
  background: #fce4ec;
  color: #c62828;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 3rem 2rem 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
}

.footer-logo h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-family: 'Brush Script MT', cursive;
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-logo p {
  color: #999;
  font-size: 0.9rem;
}

.footer-contact p {
  margin-bottom: 0.5rem;
  color: #999;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #666;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 6rem;
    text-align: center;
  }

  .hero-image {
    order: -1;
  }

  .hero-stats {
    justify-content: center;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .notary-illustration {
    width: 300px;
    height: 300px;
  }

  .stamp-circle {
    width: 180px;
    height: 180px;
  }

  .logo-title {
    font-size: 3rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 2rem 1.5rem;
  }

  .logo-title {
    font-size: 2.5rem;
  }

  .logo-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .notary-illustration {
    width: 250px;
    height: 250px;
  }
}
</style>
