import { useState } from 'react'
import img from '../assets/Logo.webp'
import './App.css'
import Person from './Person'
import ReactModal from 'react-modal';
function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  return (<>
        <ReactModal
          isOpen={showPrivacyModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
          style={{
            content: {
              background: '#0b0b0b',
              border: "none",
              borderRadius: "15px",
              boxShadow: "0px 0px 10px #000",
            }
          }}
          overlayClassName="background-none centered w-1/3 h-4/5 border-none"
          className={""}
          >
          <div className={"centered text-center"}>
            <h1 className={"text-5xl pb-5 text-green-600 font-bold"}>Privacy Policy</h1>
            <h2 className={"text-2xl pb-5 text-green-500 font-bold"}>What type of data is collected?</h2>
            <p className={"w-3/4 left-0 right-0 m-auto pb-5 text-green-300"}>Identifiers (IDs) for various items are collected to monitor usage of the bot as well as supplement some features. This data is only stored as long as is necessary.</p>
            <h2 className={"text-2xl pb-5 text-green-500 font-bold"}>Selling Your Data</h2>
            <p className={"w-3/4 left-0 right-0 m-auto pb-5 text-green-300"}>The only way that your data leaves our hands willingly is if it is properly subpoenaed from a legal entity that holds proper jurisdiction over our conduct.</p>
            <button className={"bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"} onClick={() => setShowPrivacyModal(false)}>Close</button>
          </div>
        </ReactModal>

    <div className="centered grid grid-cols-5 gap-10" style={{background: "#0b0b0b", padding: "15px", borderRadius: "15px"}}>
      <img src={img} alt="logo" className={"col-span-2 rounded-3xl border-solid border-black border-4 align-middle top-0 bottom-0 m-auto"} style={{display: "inline !important", verticalAlign: "middle"}} />
        <div className={"col-span-3 w-full text-white "} >
          <h1 className={"w-full text-center text-5xl"}>ObamaBot</h1>
          <p className={"w-full text-center"}>your average gen-purpose discord bot.</p>
          <div className={"grid grid-cols-3 gap-10 py-5"}>
            <button className={"col-span-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"} onClick={(e) => window.location.assign("https://top.gg/bot/444463875908304901/invite/")}>
              Add to server
              </button>
            <button className={"col-span-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"}>
              Commands
              </button>
            <button className={"col-span-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"} onClick={(e) => window.location.assign("https://discord.gg/ZU8zFx8")}>
              Support Server
              </button>
          </div>
          <h1 className={'w-full text-center text-3xl'}> Developers</h1>
          <div className={"grid grid-cols-4 gap-10 py-5"}>
            <Person href={"https://github.com/Wolfkid200444"} name={"Wolfie"} title={"Lead Dev"} img={"https://avatars.githubusercontent.com/u/32025746?v=4"}/>
            <Person href={"https://github.com/jdadonut"} name={"Jai"} title={"frontend dev \n resident catgirl"} img={"https://avatars.githubusercontent.com/u/47060357?v=4"}/>
            <Person href={"https://github.com/PokemonLeader"} name={"PokemonLeader"} title={"Dev"} img={"https://avatars.githubusercontent.com/u/30406817?v=4"}/>
            <Person href={"https://github.com/yehezkieldio"} name={"Liz"} title={"frontend dev"} img={"https://avatars.githubusercontent.com/u/47420407?v=4"}/>

          </div>

        </div>
    </div>
        <div className={"bottom-0 absolute m-auto w-screen center p-5"}>
          <p className={"w-full text-center text-xl text-white w-full "}>
             {'made with meows and nyas by jai <3'} <br/> <a href={"#"} onClick={(e) => setShowPrivacyModal(true)} className={"text-white"}>Privacy Policy</a>
          </p>
        </div>
    </>
  )
}

export default App
