/* eslint-disable react/prop-types */

import { useState } from "react"

function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      {/* <Greeting name={"raju"}/> */}
      {/* <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent 
              name={"manoj"}
              subTitle={"20 followers"}
              time={"3m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job"}
            />
              
            <br />
          </div>
          <div>
            <PostComponent 
              name={"raman"}
              subTitle={"105 followers"}
              time={"3m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job"}
            />
            <br />
          </div>
            <div>
            <PostComponent 
              name={"manoj"}
              subTitle={"Promoted"}
              // time={"3m ago"} // commented out for conditional rendering example
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job"}
            />
          </div>
        </div>
      </div> */}
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return <div>
    <button onClick={() => setIsVisible(!isVisible)}>
      Toggle message
    </button>
    {isVisible ? <p>This message is conditionally rendered!</p> : null}
  </div>
}

// const style = { width: 200, 
//   backgroundColor: "white", 
//   borderRadius: 10, 
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 20
// };

// function PostComponent({ name, subTitle, time, image, description}) {
//   return <div style={style}>
//     <div style={{display: "flex"}}>
//       <img src={image} 
//         style={{
//           width: 30,
//           height: 30,
//           borderRadius: 20
//       }} />
//       <div 
//         style={{ 
//           fontSize: 10, 
//           marginLeft: 5, 
//           marginBottom: 5 
//         }}>
//         <b>
//           {name}
//         </b>
//         <div>{subTitle}</div>
//           { time !== undefined ? <div style={{display: "flex"}}>
//             <div>{time}</div>
//             <img src={"https://imgs.search.brave.com/o73XX08gjQqh7dabY_PZDe3kAe5PkzIIQ2g-EkcSlq0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/MzIzMTczL3Bob3Rv/L2ZvdXItb2Nsb2Nr/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz02a2VibFhsU2pT/dXR2S2hGUEMxQWdk/MnRZNEFydTVkUGJB/cTNSbWRmVDl3PQ"} 
//               style={{ width: 12, height: 12}} 
//             />
//           </div> : null}
//       </div>
//     </div>
//     <div style={{ fontSize: 12 }}>
//       {description}
//     </div>
//   </div>
// }

// const Greeting = ({name}) => {
//   return <h1>Hello, {name}</h1>
// }

export default App
