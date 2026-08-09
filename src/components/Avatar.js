import React from 'react';

const Avatar = ({ 
  src, 
  nickname = '',
  size = 40,
  className = '',
  onClick,
  showCrown = false
}) => {
  const initial = nickname ? nickname.charAt(0) : 'U';

  const commonStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    cursor: onClick ? 'pointer' : 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0
  };

  return (
    <div className={`avatar-wrapper ${className}`} onClick={onClick} style={commonStyle}>
      {src ? (
        <img 
          src={src} 
          alt={`${nickname} profile`} 
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
        />
      ) : (
        <div style={{ 
          width: '100%', height: '100%', borderRadius: '50%', 
          backgroundColor: '#e2e8f0',
          color: '#64748b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'bold', fontSize: size * 0.4
        }}>
          {initial}
        </div>
      )}
      
      {showCrown && (
        <span style={{ position: 'absolute', top: -5, right: -5, fontSize: size * 0.4 }}>👑</span>
      )}
    </div>
  );
};

export default Avatar;
