import { useState, React } from "react";
import { LuCodesandbox } from "react-icons/lu";
import { MdOutlineModeEdit } from "react-icons/md";
import Headers from "../Components/header";
import courseimage from "../assets/imags/bannerimg2.png";
import { FaList } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
import ImageUploading from "react-images-uploading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AddCourse() {
  const navigate = useNavigate();
  const addModule = () => {
    setFormdata(prevState => ({
      ...prevState,
      modulename: [...prevState.modulename, ""],
      modulevideo: [...prevState.modulevideo, ""]
    }));
  };

  const [inputtitle, setChangeinputtitle] = useState(false);
  const [inputprice, setChangeinputprice] = useState(false);

  const [inputDescription, setChangeinputDescription] = useState(false);
  const [inputmodul, setChangeinputmodul] = useState(false);
  const maxNumber = 1;

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    // console.log(formdata);
  };

  const [images, setImages] = useState();
  const [formdata, setFormdata] = useState({
    title: "",
    CourseDescription: "",
    images: [],
    modulevideo: [],
    price : "",
    modulename: [],
  });
    
const handleModuleChange = (e, index) => {
  const { name, value } = e.target;

  if (name === "modulename") {
      setFormdata(prevState => {
          const modulename = [...prevState.modulename];
          modulename[index] = value;
          return { ...prevState, modulename };
      });
  } else {
    setFormdata(prevState => {
      const modulevideo = [...prevState.modulevideo];
      modulevideo[index] = value;
      return { ...prevState, modulevideo };
  });
  }
};
const handleModuleFileChange = (e, index) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      console.log('reader.result:', reader.result);
      setFormdata(prevState => {
        const modulevideo = [...prevState.modulevideo];
        modulevideo[index] = reader.result;
        return { ...prevState, modulevideo };
      });
    };
    reader.onerror = (error) => {
      console.log('Error reading file:', error);
    };
    reader.readAsDataURL(file);
  } else {
    setFormdata(prevState => {
      const modulevideo = [...prevState.modulevideo];
      modulevideo[index] = "";
      return { ...prevState, modulevideo };
    });
  }
};

  const onChange = (imageList) => {
    setImages(imageList);
    // console.log(imageList);
    formdata.images = imageList.map(image => image.data_url);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    try {
      console.log(formdata);
      fetch(`${import.meta.env.VITE_API}Course/AddCourses`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        
          if (data.message === "Course added successfully") {
            toast.success("Course added successfully");
            
            navigate("/MylearningDashboard");
          } else if (data.message === "try agian") {
            toast.error("try agian");
          }

        });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className=" w-full min-h-screen bg-[#031328]">
      <Headers />
      <form onSubmit={handleSubmit}>
      <div className="      bg-[#031328] flex justify-center mt-20">
        <div className=" w-2/5 h-1/2 text-white rounded-lg shadow-lg pr-5 ">
          <div className="flex">
            <LuCodesandbox className=" text-2xl mt-2 mr-2" />
            <h1 className=" text-2xl"> Customize your Course </h1>
          </div>
          <div className="mt-10 bg-[#2B0B84] p-2 w-95 rounded">
            <div className="flex">
              <h1 className=" text-2xl"> Course Title </h1>
              <button
                type="button"
                onClick={() => setChangeinputtitle(true)}
                className=" flex w-3/5  justify-end "
              >
                <MdOutlineModeEdit className=" text-1xl mt-1 mr-2" />
                <h4 className=""> Edit Title </h4>
              </button>
            </div>
            <div className="m-2 text-[#A3A2A4] flex">
              {inputtitle ? (
                <div>
                  <input
                    type="text"
                    placeholder="Enter title"
                    className="w-/3  rounded-md mb-4 bg-transparent border-2 border-white"
                    value={formdata.title}
                    onChange={handleChange}
                    name="title"
                    id="title"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setChangeinputtitle(false);
                    }}
                    className="btn bg-white text-[1.1rem]  ml-60 text-[#352683] px-8 font-semibold rounded-lg "
                  >
                    save
                  </button>
                </div>
              ) : (
                <h1 className="title">
                  {formdata.title == "" ? "enter Title" : formdata.title}
                </h1>
              )}
            </div>
          </div>
          <div className="mt-10 bg-[#2B0B84] p-2 w-95 rounded">
            <div className="flex">
              <h1 className=" text-2xl"> Course Description </h1>
              <button
                type="button"
                onClick={() => setChangeinputDescription(true)}
                className=" flex w-3/5  justify-end "
              >
                <MdOutlineModeEdit className=" text-1xl mt-1 mr-2" />
                <h4 className=""> Edit Description </h4>
              </button>
            </div>
            <div className="m-2 text-[#A3A2A4] flex">
              {inputDescription ? (
                <div>
                  <textarea
                    type="text"
                    placeholder="Enter Description"
                    className="w-full h-20 rounded-md mb-4 bg-transparent border-2 border-white"
                    value={formdata.CourseDescription}
                    onChange={handleChange}
                    name="CourseDescription"
                    id="CourseDescription"
                  ></textarea>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setChangeinputDescription(false);
                    }}
                    className="btn bg-white text-[1.1rem]  ml-60 text-[#352683] px-8 font-semibold rounded-lg "
                  >
                    save
                  </button>
                </div>
              ) : (
                <h1 className="Description">
                  {formdata.CourseDescription == ""
                    ? "enter Description"
                    : formdata.CourseDescription}
                </h1>
              )}
            </div>
          </div>
          <div className="mt-10 bg-[#2B0B84] p-2 w-95 rounded">
            <div className="flex">
              <h1 className=" text-2xl">Course Images</h1>
              {/* <div className=" flex w-3/5 justify-end ">
                <MdOutlineModeEdit className=" text-1xl mt-1 mr-2" />
                <h4 className=""> Edit Title </h4>
              </div> */}
            </div>
            <div className="m-2 text-[#A3A2A4]">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                    type="button"
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    &nbsp;
                    <button onClick={onImageRemoveAll}>
                      Remove all images
                    </button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item w-96">
                        <img src={image.data_url} alt="" className="w-96" />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)}>
                            Update
                          </button>
                          <button onClick={() => onImageRemove(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>
        </div>
        <div className=" w-2/5 h-1/2 text-white rounded-lg shadow-lg pr-5 ">
          <div className="flex">
            <IoIosCheckboxOutline className=" text-2xl mt-2 mr-2" />

            <h1 className=" text-2xl"> Course Chapter </h1>
          </div>
          <div className="mt-10 bg-[#2B0B84] p-2 w-95 rounded">
            <div className="flex">
              <h1 className=" text-2xl"> Course Module </h1>
              <div className=" flex w-3/5 justify-end ">
                <button
                  type="button"
                  onClick={() => setChangeinputmodul(true)}
                  className=" flex w-3/5  justify-end "
                >
                  <MdOutlineModeEdit className=" text-1xl mt-1 mr-2" />
                  <h4 className=""> Add Module </h4>
                </button>
              </div>
            </div>
            {formdata.modulename.map((module, index) => (
          
  <div key={index} className="m-2 w-full ">
    <div className="flex">
        <h1 key={index} className="mr-2 text-1xm">Module name {index + 1}</h1>
    <input
      type="text"
      placeholder="enter Modul name"
      // value={formdata.modulename}
      onChange={(e) => handleModuleChange(e, index)}
      name="modulename"
      className="w-2/3  rounded-md mb-4 bg-transparent border-2 border-white mr-5"
    />

    </div>
    <div className="flex">
    <h1 key={index} className="mr-2 text-1xm">Module video {index + 1}</h1>
 {/* <input
      type="text"
      placeholder="enter Modul video"
      // value={formdata.modulename}
      onChange={(e) => handleModuleChange(e, index)}
      name="modulevideo"
      className="w-2/3  rounded-md mb-4 bg-transparent border-2 border-white mr-5"
    /> */}
    <input type="file" className="w-2/3" name="modulevideo" onChange={(e) => handleModuleFileChange(e, index)} />
  </div>
  </div>
))}


<button type="button" className="btn bg-white text-[1.1rem]  ml-40 text-[#352683] px-8 font-semibold rounded-lg " onClick={addModule}>Add Module</button>
          </div>

          <div className="mt-10 bg-[#2B0B84] p-2 w-95 rounded">
            <div className="flex">
              <h1 className=" text-2xl"> Course Price </h1>
              <button
                type="button"
                onClick={() => setChangeinputprice(true)}
                className=" flex w-3/5  justify-end "
              >
                <MdOutlineModeEdit className=" text-1xl mt-1 mr-2" />
                <h4 className=""> Edit Price </h4>
              </button>
            </div>
            <div className="m-2 text-[#A3A2A4] flex">
              {inputprice ? (
                <div>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    className="w-/3  rounded-md mb-4 bg-transparent border-2 border-white"
                    value={formdata.price}
                    onChange={handleChange}
                    name="price"
                    id="price"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setChangeinputprice(false);
                    }}
                    className="btn bg-white text-[1.1rem]  ml-60 text-[#352683] px-8 font-semibold rounded-lg "
                  >
                    save
                  </button>
                </div>
              ) : (
                <h1 className="price">
                  {formdata.price == "" ? "enter price" : formdata.price}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex justify-center mt-10 gap-3">
        <a
          className="bg-[#616161] text-[1.1rem] font-normal text-white   rounded-2xl   px-8 py-1"
          href="/Register"
        >
          Back
        </a>

       
        <button
              type="submit"
              className="bg-[#352683] text-1xl rounded-3xl text-white px-8 py-2 rounded-md font-semibold"
            >
              Add Course
            </button>
      </div>
      </form>
    </div>
  );
}

export default AddCourse;
