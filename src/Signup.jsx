import { useState } from 'react'
import ustpLogo from './images/heartbeat.png'

function Signup({ onBackToLogin }) {
  const [idNumber, setIdNumber] = useState('')
  const [assignedOffice, setAssignedOffice] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!idNumber || !assignedOffice || !name) {
      setError('Please fill in all fields.')
      setSuccess(false)
      return
    }
    setError('')
    setSuccess(true)
    setIdNumber('')
    setAssignedOffice('')
    setName('')
  }

  return (
    <form
      className="signup-form"
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        background: 'rgb(255, 255, 255)',
        borderRadius: '1.25rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2.5rem 2rem',
      }}
    >
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
      <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#2563eb', marginBottom: '1.2rem', textAlign: 'center' }}>
        Sign Up for VitalSense
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
      {success && (
        <div style={{
          background: '#bbf7d0',
          color: '#166534',
          padding: '0.5rem 0.75rem',
          borderRadius: 6,
          marginBottom: 14,
          fontSize: '0.97rem',
          textAlign: 'center',
          border: '1px solid #86efac'
        }}>
          Registration successful!
        </div>
      )}
      <div style={{ marginBottom: '1.1rem', width: '100%' }}>
        <input
          type="text"
          value={idNumber}
          onChange={e => setIdNumber(e.target.value)}
          required
          placeholder="ID Number"
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
      <div style={{ marginBottom: '1.1rem', width: '100%' }}>
        <input
          type="text"
          value={assignedOffice}
          onChange={e => setAssignedOffice(e.target.value)}
          required
          placeholder="Assigned Office"
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
      <div style={{ marginBottom: '1.5rem', width: '100%' }}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Name"
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
        Sign Up
      </button>
      <div style={{ marginTop: 18, fontSize: '1rem', color: '#2563eb', textAlign: 'center' }}>
        Already have an account?{' '}
        <span
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#2563eb',
            fontWeight: 600
          }}
          tabIndex={0}
          role="button"
          onClick={onBackToLogin}
        >
          Login
        </span>
      </div>
    </form>
  )
}

export default Signup
