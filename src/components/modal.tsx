import React from "react";
import "./../components/styles/modal.css";
import CheckIcon from "../assets/checkmark.png";
import CloseIcon from "../assets/close.png";

type Props = {
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onSave?: () => void;
};

const Modal: React.FC<Props> = ({ show, children, onClose, onSave }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay " onClick={onClose}>
      <div className="modal-container fw-bold " onClick={(e) => e.stopPropagation()}>
        <div className="modal-body  fs-5">{children}</div>
        <div className="modal-footer">
          {onSave && (
            <button className="button" onClick={onSave}>
              <img src={CheckIcon} width={37} height={37} alt="" />
            </button>
          )}
          <button className="button round-btn" onClick={onClose}>
            <img src={CloseIcon} width={14} height={14} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
