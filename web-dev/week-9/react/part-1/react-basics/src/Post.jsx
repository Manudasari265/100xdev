const style = { width: 200, 
  backgroundColor: "white", 
  borderRadius: 10, 
  borderColor: "gray",
  borderWidth: 1,
  padding: 20
};

// eslint-disable-next-line react/prop-types
export function PostComponent({ name, subTitle, time, image, description}) {
    return <div style={style}>
        <div style={{display: "flex"}}>
          <img src={image} 
            style={{
              width: 30,
              height: 30,
              borderRadius: 20
          }} />
          <div 
            style={{ 
              fontSize: 10, 
              marginLeft: 5, 
              marginBottom: 5 
            }}>
            <b>
              {name}
            </b>
            <div>{subTitle}</div>
              { time !== undefined ? <div style={{display: "flex"}}>
                <div>{time}</div>
                <img src={"https://imgs.search.brave.com/o73XX08gjQqh7dabY_PZDe3kAe5PkzIIQ2g-EkcSlq0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/MzIzMTczL3Bob3Rv/L2ZvdXItb2Nsb2Nr/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz02a2VibFhsU2pT/dXR2S2hGUEMxQWdk/MnRZNEFydTVkUGJB/cTNSbWRmVDl3PQ"} 
                  style={{ width: 12, height: 12}} 
                />
              </div> : null}
          </div>
        </div>
        <div style={{ fontSize: 12 }}>
          {description}
        </div>
      </div>
}
    