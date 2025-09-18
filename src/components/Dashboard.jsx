import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

function Dashboard({ idNumber }) {
  // Sample data for the pie chart
  const pieData = [
    { name: 'Heart Rate', value: 72 },
    { name: 'Blood Pressure', value: 80 },
    { name: 'Temperature', value: 37 },
    { name: 'Oxygen Level', value: 98 },
  ]
  const COLORS = ['#22c55e', '#f59e42', '#38bdf8', '#0ea5e9']

  // Sample data for the line chart
  const lineData = [
    { name: 'Mon', HeartRate: 70 },
    { name: 'Tue', HeartRate: 72 },
    { name: 'Wed', HeartRate: 74 },
    { name: 'Thu', HeartRate: 71 },
    { name: 'Fri', HeartRate: 73 },
    { name: 'Sat', HeartRate: 75 },
    { name: 'Sun', HeartRate: 72 },
  ]

  // Sample user log data
  const userLogs = [
    {
      id: 1,
      username: idNumber,
      datetime: '2024-06-10 09:15:23',
      totalVitals: 4,
      vitals: {
        'Heart Rate': '72 bpm',
        'Blood Pressure': '120/80',
        'Temperature': '36.7°C',
        'Oxygen Level': '98%'
      }
    },
    {
      id: 2,
      username: idNumber,
      datetime: '2024-06-09 18:42:10',
      totalVitals: 4,
      vitals: {
        'Heart Rate': '74 bpm',
        'Blood Pressure': '122/82',
        'Temperature': '36.8°C',
        'Oxygen Level': '97%'
      }
    }
  ]

  // Calculate total vitals breakdown
  const totalVitalsBreakdown = {
    'Total Readings': userLogs.length,
    'Total Vital Signs': userLogs.reduce((sum, log) => sum + log.totalVitals, 0),
    'Average Heart Rate': Math.round(userLogs.reduce((sum, log) => sum + parseInt(log.vitals['Heart Rate']), 0) / userLogs.length),
    'Last Reading': userLogs[0]?.datetime || 'N/A'
  }


  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'relative',
      zIndex: 1
    }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        height: '100vh',
        background: '#f8fafc',
        borderRight: '1px solid #e2e8f0',
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 10
      }}>
        {/* Menu Items */}
        <div style={{ padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#475569'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>User</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            marginBottom: '8px',
            borderRadius: '8px',
            background: '#e0f2fe',
            cursor: 'pointer',
            color: '#2563eb'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="9" x2="9" y2="9"/>
              <line x1="15" y1="9" x2="15" y2="9"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
              <line x1="9" y1="12" x2="15" y2="12"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Dashboard</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#475569'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Documentation</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#475569'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Office Assignment</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#475569'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        marginLeft: '250px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 0,
        paddingBottom: 30
      }}>
        <div style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 12px',
          boxSizing: 'border-box'
        }}>
       

        <div style={{
          color: '#2563eb',
          fontWeight: 700,
          fontSize: '1.15rem',
          marginBottom: 24,
          background: '#e0f2fe',
          display: 'inline-block',
          padding: '0.5rem 1.25rem',
          borderRadius: 8,
          boxShadow: '0 1px 4px rgba(37,99,235,0.06)'
        }}>
          
        </div>
        
        {/* User Log Table */}
        <div
          style={{
            width: '80%',
            maxWidth: 800,
            margin: '2.5rem auto 0',
            background: '#fff',
            borderRadius: 10,
            boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
            padding: '1.5rem 1rem'
          }}
        >
          <h3 style={{ color: '#2563eb', marginBottom: 18 }}>User Log</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', color: '#2563eb' }}>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>User</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>Time & Date</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>Total Vitals Logged</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>Vitals Breakdown</th>
              </tr>
            </thead>
            <tbody>
              {userLogs.map(log => (
                <tr key={log.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top', fontWeight: 600, color: '#2563eb' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8
                    }}>
                      <span style={{  
                        display: 'inline-block',
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: '#e0e7ff',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        textAlign: 'center',
                        lineHeight: '28px'
                      }}>
                        {log.username[0] ? log.username[0].toUpperCase() : 'U'}
                      </span>
                      {log.username}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top', color: '#64748b' }}>
                    {log.datetime}
                  </td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top', color: '#22c55e', fontWeight: 600 }}>
                    {log.totalVitals}
                  </td>
                  <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {Object.entries(log.vitals).map(([k, v]) => (
                        <li key={k} style={{ color: '#2563eb', marginBottom: 2 }}>
                          <span style={{ fontWeight: 500 }}>{k}:</span> <span style={{ color: '#64748b' }}>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        {/* Charts Container - Side by Side */}
        <div
          style={{
            width: '100%',
            maxWidth: 1200,
            margin: '4rem auto 0',
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Line Chart Section */}
          <div
            style={{
              width: '100%',
              maxWidth: 640,
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
              padding: '1.5rem 1rem'
            }}
          >
            <h3 style={{ color: '#2563eb', marginBottom: 30, fontSize: '1.2rem', fontWeight: 600 }}>Heart Rate Trend (Last 7 Days)</h3>
            <ResponsiveContainer width="90%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[65, 80]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="HeartRate" stroke="#22c55e" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart Section */}
          <div
            style={{
              width: '100%',
              maxWidth: 300,
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
              padding: '1.5rem 1rem'
            }}
          >
            <h3 style={{ color: '#2563eb', marginBottom: 12 }}>Health Metrics Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
              >
                {pieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
