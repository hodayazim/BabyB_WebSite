import React, { useState, useEffect } from "react";
import "../css/ManagerForms.css";

// export default function Image() {
//   const [images, setImages] = useState([""]);

//   const handleText = (i) => (e) => {
//     console.log(this.refs);
//     const images = [...images];
//     images[i] = e.target.value;
//     setImages(images);
//   };

//   function changeImage(val) {
//     setImages(val);
//   }

//   const handleDelete = (i) => (e) => {
//     e.preventDefault();
//     const images = [...images.slice(0, i), ...images.slice(i + 1)];
//     setImages(images);
//   };

//   const addImage = (e) => {
//     e.preventDefault();
//     const imagesarr = images.concat([""]);
//     setImages(imagesarr);
//   };
//   const [image, SetImage] = useState("");
//   const onImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = (e) => {
//         SetImage(e.target.result);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   return (
//     <div>
//       {images.map((image, index) => (
//         <span>
//           <div>input from image.js page</div>
//           <input
//             className="aaa"
//             type="file"
//             key={index}
//             value={image}
//             onChange={(e) => onImageChange(e.target.value)}
//           />
//           <button onClick={handleDelete(index)}>X</button>
//         </span>
//       ))}
//       <img id="target" src={image} />
//       <button onClick={addImage}>Add image</button>
//     </div>
//   );
// }

/**/
// export default function CheckableList(props) {
//   const [items, setitems] = useState({
//     id: 1,
//     text: "Hey this is a test.",
//     img: " ",
//     like: 0,
//   });

//   return (
//     <div>
//       <div>{items.text}</div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <label>
//               <input type="checkbox" />
//               {item}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
