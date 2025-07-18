import { useState } from 'react'
import './App.css'
import bgImg from './images/USTP-CDO-ICT-building-2048x1152.jpg'
import ustpLogo from './images/heartbeat.png'
import Signup from './Signup' // <-- Import Signup

function App() {
  const [idNumber, setIdNumber] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [showSignUp, setShowSignUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!idNumber || !password) {
      setError('Please enter both ID Number and password.')
      return
    }
    setError('')
    setLoggedIn(true)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: 'none'
      }}
    >
      {/* Blurred Background */}
      <div
        style={{
          position: 'fixed',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: `url(${bgImg}) center center / cover no-repeat`,
          filter: 'blur(0px) brightness(0.85)',
          pointerEvents: 'none',
        }}
      />
      {/* Overlay to darken/soften */}
      <div
        style={{
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, #e0e7ff88 0%, #f0fdfa88 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Navigation Bar */}
      <nav style={{
        width: '100%',
        background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
        color: '#fff',
        padding: '1rem 0',
        boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '1.3rem',
        letterSpacing: '1px',
        zIndex: 2
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={ustpLogo}
            alt="VitalSense Logo"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#fff',
              objectFit: 'cover',
              marginRight: 8,
              boxShadow: '0 1px 4px rgba(0,0,0,0.10)'
            }}
          />
          <span style={{
            fontWeight: 700,
            fontSize: '1.35rem',
            letterSpacing: '1px',
            color: '#fff'
          }}>
            VitalSense
          </span>
        </span>
      </nav>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: 0,
        position: 'relative',
        zIndex: 2
      }}>
        {!loggedIn && !showSignUp && (
          <form
            className="login-form"
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 400,
              margin: '0 auto',
              background: 'rgb(255, 255, 255)', // <-- More transparent
              borderRadius: '1.25rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              padding: '2.5rem 2rem',
            }}
          >
            {/* Logo area */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, gap: 12 }}>
              <img
                src={ustpLogo}
                alt="VitalSense Logo"
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#fff',
                  objectFit: 'cover',
                  marginBottom: 4,
                  boxShadow: '0 2px 8px rgba(37,99,235,0.10)'
                }}
              />
              <span style={{
                fontWeight: 700,
                fontSize: '2rem',
                color: '#2563eb',
                letterSpacing: '1px',
                marginBottom: 4
              }}>
                VitalSense
              </span>
            </div>
            {/* Welcome message */}
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#2563eb', marginBottom: '1.2rem', textAlign: 'center' }}>
              Welcome to VitalSense
            </div>
            {error && (
              <div style={{
                background: '#fee2e2',
                color: '#b91c1c',
                padding: '0.5rem 0.75rem',
                borderRadius: 6,
                marginBottom: 14,
                fontSize: '0.97rem',
                textAlign: 'center',
                border: '1px solid #fecaca'
              }}>
                {error}
              </div>
            )}
            <div style={{ marginBottom: '1.25rem', width: '100%' }}>
              {/* Removed label for ID Number */}
              <input
                type="text"
                value={idNumber}
                onChange={e => setIdNumber(e.target.value)}
                required
                autoFocus
                placeholder="ID Number"
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 6,
                  border: '1px solidrgb(25, 100, 192)',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={e => e.target.style.border = '1.5px solidrgb(246, 246, 246)'}
                onBlur={e => e.target.style.border = '1px solid #cbd5e1'}
              />
            </div>
            <div style={{ marginBottom: '1.5rem', width: '100%' }}>
              {/* Removed label for Password */}
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 6,
                    border: '1px solid #cbd5e1',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={e => e.target.style.border = '1.5px solid #2563eb'}
                  onBlur={e => e.target.style.border = '1px solid #cbd5e1'}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.1rem',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
                transition: 'background 0.2s, transform 0.1s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 100%)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)'}
            >
              Login
            </button>
            {/* Sign up link */}
            <div style={{ marginTop: 18, fontSize: '1rem', color: '#2563eb', textAlign: 'center' }}>
              Don't have an account?{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: '#2563eb',
                  fontWeight: 600
                }}
                tabIndex={0}
                role="button"
                onClick={() => setShowSignUp(true)}
              >
                Sign up
              </span>
            </div>
          </form>
        )}

        {/* Show Signup page */}
        {!loggedIn && showSignUp && (
          <Signup onBackToLogin={() => setShowSignUp(false)} />
        )}

        {loggedIn && (
          <div style={{
            textAlign: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h2 style={{ color: '#22c55e', marginBottom: 12 }}>Welcome, {idNumber}!</h2>
            <p style={{ color: '#64748b', marginBottom: 24 }}>You are now logged in to vitalsense.</p>
            <div style={{
              background: '#f0fdfa',
              borderRadius: 10,
              padding: '1.2rem 1rem',
              color: '#2563eb',
              fontWeight: 500,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(37,99,235,0.04)',
              margin: '0 auto',
              maxWidth: 400
            }}>
              Dashboard coming soon!
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        width: '100%',
        background: '#f1f5f9',
        color: '#64748b',
        textAlign: 'center',
        padding: '1rem 0',
        fontSize: '1rem',
        letterSpacing: '0.5px',
        marginTop: 'auto',
        zIndex: 2
      }}>
        &copy; {new Date().getFullYear()} vitalsense. All rights reserved.
      </footer>
    </div>
  )
}

export default App