import React from 'react'

// function Map() {
//   const arr =["React js","Node js","Anular js","Javascript"]
//   return (
//     <div>
//       {
//         arr.map(
//           (value,reddy)=><li key={reddy}>{value}</li>
//         )
//       }
//     </div>
//   )
// }

// export default Map

// import React from 'react'

function Map() {
  const arr=[
    {
      id:1,
      name:"manoj"
    },
    {
      id:2,
      name:"sathya"
    },
    {
      id:3,
      name:"guru"
    }
  ]
  return (
    <div>
      {
        arr.map(
          (value,id)=><li key={value.id}>{value.name}</li>
        )
      }
    </div>
  )
}

export default Map