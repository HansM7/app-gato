
interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
  }
  function redirect() {
    window.open("https://wa.me/+51946380310", "_blank");
  }

  const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 max-w-[80%] w-full lg:max-w-[400px]  ">
          <p>{message}</p>
          
          <div className="flex justify-end mt-8 items-center gap-2">
          <button onClick={redirect}
          className=" bg-green-500 flex flex-wrap gap text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300 "
          > <svg width="26" height="24" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32C101.5 32 1.9 131.6 1.9 254C1.9 293.1 12.1 331.3 31.5 365L0 480L117.7 449.1C150.1 466.8 186.6 476.1 223.8 476.1H223.9C346.2 476.1 448 376.5 448 254.1C448 194.8 422.8 139.1 380.9 97.1ZM223.9 438.7C190.7 438.7 158.2 429.8 129.9 413L123.2 409L53.4 427.3L72 359.2L67.6 352.2C49.1 322.8 39.4 288.9 39.4 254C39.4 152.3 122.2 69.5 224 69.5C273.3 69.5 319.6 88.7 354.4 123.6C389.2 158.5 410.6 204.8 410.5 254.1C410.5 355.9 325.6 438.7 223.9 438.7ZM325.1 300.5C319.6 297.7 292.3 284.3 287.2 282.5C282.1 280.6 278.4 279.7 274.7 285.3C271 290.9 260.4 303.3 257.1 307.1C253.9 310.8 250.6 311.3 245.1 308.5C212.5 292.2 191.1 279.4 169.6 242.5C163.9 232.7 175.3 233.4 185.9 212.2C187.7 208.5 186.8 205.3 185.4 202.5C184 199.7 172.9 172.4 168.3 161.3C163.8 150.5 159.2 152 155.8 151.8C152.6 151.6 148.9 151.6 145.2 151.6C141.5 151.6 135.5 153 130.4 158.5C125.3 164.1 111 177.5 111 204.8C111 232.1 130.9 258.5 133.6 262.2C136.4 265.9 172.7 321.9 228.4 346C263.6 361.2 277.4 362.5 295 359.9C305.7 358.3 327.8 346.5 332.4 333.5C337 320.5 337 309.4 335.6 307.1C334.3 304.6 330.6 303.2 325.1 300.5Z" fill="white"/>
          </svg>
          <span>WhatsApp</span>
            </button>
            <button
              className="bg-[#6D28D9] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#4C03BE]"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationModal;