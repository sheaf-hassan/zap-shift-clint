import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}.`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, 'approved');
  };

  const handleRejection = rider =>{
    updateRiderStatus(rider, 'rejected');
  }

   const handleDelete = (id) => {
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/riders/${id}`).then((res) => {
            console.log(res.data);
  
            if (res.data.deletedCount) {
              // refresh teh data in the ui
              refetch();
  
              Swal.fire({
                title: "Deleted!",
                text: "Rider has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };

  return (
    <div className="bg-gray-50 text-black">
      <h2 className="text-5xl text-black mb-4">
        Riders Pending Approval: {riders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.riderName}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>
                  {
                    <p
                      className={`${rider.status === "approved" ? "text-green-800" : "text-red-500"}`}
                    >
                      {rider.status}
                    </p>
                  }
                </td>
                <td>{rider.workStatus}</td>
                <td>
                  <button
                    className="btn btn-square bg-gray-200 text-black border-0 shadow-none hover:bg-primary mr-2"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-square bg-gray-200 text-black border-0 shadow-none hover:bg-primary mr-2"
                  >
                    <FaUserCheck />
                  </button>
                  <button 
                    onClick={ () => handleRejection(rider) }
                    className="btn btn-square bg-gray-200 text-black border-0 shadow-none hover:bg-primary mr-2">
                    <IoPersonRemoveSharp />
                  </button>
                  <button 
                    onClick={ () => handleDelete(rider._id) }
                    className="btn btn-square bg-gray-200 text-black border-0 shadow-none hover:bg-primary">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
