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

  return (
    <div style={{
      textAlign: 'center',
      width: '100vw',
      minHeight: 'calc(100vh - 120px)', // leave space for header/footer
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 24,
      paddingBottom: 24,
      overflowX: 'hidden',
      position: 'relative', // add this
      zIndex: 1 // add this
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 12px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ color: '#22c55e', marginBottom: 12 }}>Welcome, {idNumber}!</h2>
        <p style={{ color: '#64748b', marginBottom: 8 }}>You are now logged in to vitalsense.</p>
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
          1,700 vitals logged
        </div>
        {/* User Log Table */}
        <div
          style={{
            width: '100%',
            maxWidth: 900,
            margin: '2.5rem auto 0',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
            padding: '1.5rem 1rem'
          }}
        >
          <h3 style={{ color: '#2563eb', marginBottom: 18 }}>User Log</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', color: '#2563eb' }}>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>User</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Time & Date</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Total Vitals Logged</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Vitals Breakdown</th>
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
        {/* Line Chart Section */}
        <div
          style={{
            width: '100%',
            maxWidth: 640,
            margin: '2.5rem auto 0',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
            padding: '1.5rem 1rem'
          }}
        >
          <h3 style={{ color: '#2563eb', marginBottom: 12 }}>Heart Rate Trend (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
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
            maxWidth: 440,
            margin: '2.5rem auto 0',
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
  )
}

export default Dashboard
