import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const listItems = [
    { id: "1", label: "Nayeem", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { id: "2", label: "Muyeen", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { id: "3", label: "Mihal", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { id: "4", label: "Abrar", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { id: "5", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { id: "6", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { id: "7", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { id: "8", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { id: "9", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { id: "10", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { id: "11", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { id: "12", label: "Daniel", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
 
  ];
  const [dragDropList, setDragDropList] = useState(listItems);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList];

    // Changing the position of the array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    // Updating the list
    setDragDropList(arr);
  };

  return (
    <div className="custom-container rounded-lg shadow m-3 items-center jus p-4 mx-auto px-5 py-2 mt-12 lg:px-12 lg:pt-6 bg-white">
      <div className='flex justify-between mb-6 bg-white'>
        <h1 className='text-lg font-bold bg-white'>(3) Selected Item</h1>
        <span className='text-lg font-medium bg-white text-red-500 cursor-pointer'>Delete Files</span>
      </div>
  
      <hr className='mb-6' />
  
      
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="itemList" direction="horizontal">
            {(provided) => (
              <div className="grid  grid-cols-5 gap-4 overflow-hidden" ref={provided.innerRef} {...provided.droppableProps}>
                {dragDropList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                      className={`${
                        index === 0
                          ? "col-span-2 row-span-2"
                          : "col-span-1 row-span-1"
                      } cus-width relative`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    
    </div>
  );
}

export default App;
