const API = 'https://propertyapi.slemtest.com.ng/swagger/v1/swagger.json';

/* export function getAPI() {
  // const res = await fetch(API);
  const res = fetch(, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify()} '))

  const data = res.json();
  return data;
} */

// export async function getAPI({ formData }) {
//   try {
//     const res = await fetch(
//       // 'https://propertyapi.slemtest.com.ng/swagger/v1/swagger.json',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json' // Important for JSON
//         },
//         body: JSON.stringify(formData)
//       }
//     );

//     const data = await res.json();
//     // setResponse(data);
//     console.log('Upload successful:', data);
//   } catch (error) {
//     console.error('Error uploading data:', error);
//   }
// }
