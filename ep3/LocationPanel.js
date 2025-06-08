import './LocationPanel.css';

const LocationPanel = ({ isOpen, onClose }) => {
  return (
    <div className={`location-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="panel-body">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search for area, street name.."
        />

        <div className="location-box d-flex align-items-center p-3 border rounded">
          <i className="bi bi-crosshair2 me-2 fs-5"></i>
          <div>
            <div className="fw-bold">Get current location</div>
            <small className="text-muted">Using GPS</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPanel;
