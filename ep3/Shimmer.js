const Shimmer = () => {
  return (
    <div
      className="card-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
        margin: '40px auto',
        maxWidth: '960px',
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '220px',
            height: '140px',
            borderRadius: '14px',
            backgroundColor: '#ebebeb', // soft light grey bg
            boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #e0e0e0 0%, #cccccc 50%, #e0e0e0 100%)',
              backgroundSize: '300% 100%',
              animation: 'shimmer-slow 2s ease-in-out infinite',
              borderRadius: '14px',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
