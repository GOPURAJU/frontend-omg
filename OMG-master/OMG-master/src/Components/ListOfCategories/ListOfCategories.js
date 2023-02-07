import React,{useState,useEffect} from "react";
import ApiServices from "../Services/ApiServices";
const ListOfCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    ApiServices.getAllCategories()
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div class="mt-2 tableFixHead ">
      <table>
        <thead>
          <tr>
            <th scope="col" class="fixed-cell">
              CatId
            </th>
            <th scope="col" class="fixed-cell">
              CatName
            </th>
          </tr>
        </thead>
        <tbody className="table">
          {category.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.catId}</td>
                <td>{item.catName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfCategories;
