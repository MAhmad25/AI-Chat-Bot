import { card1, card2, container } from "./style.module.css";
const Header = () => {
      return (
            <div className="w-full h-20 flex flex-col   justify-center items-center">
                  <div className={container}>
                        <div className={card1}></div>
                        <div className={card2}></div>
                        <div className="flex justify-center items-center">Gemini</div>
                  </div>
            </div>
      );
};

export default Header;
