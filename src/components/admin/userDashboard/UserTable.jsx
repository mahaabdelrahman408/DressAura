import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Auth/AuthContext";

const TABLE_HEAD = ["First Name", "Role", "Operations"];

const UserTable = () => {
  const { getAllUsers, allUsersInfo, changeUserRole, deleteUserById } =
    useAuth();
  return (
    <Card className="h-full mb-10 dark:bg-gray-700 ">
      <table className=" lg:w-full table-auto text-center">
        <thead>
          <tr className="justify-between lg:w-full w-fit">
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800  p-4 "
              >
                <Typography
                  variant="small"
                  className="font-normal leading-none opacity-70 dark:opacity-100 dark:text-white"
                >
                  {head || ""}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allUsersInfo?.map(
            ({ firstName, role, _id, image, email }, index) => (
              <tr key={index}>
                <td className="p-4 border-b w-fit border-blue-gray-50">
                  <div className="flex w-fit gap-3 items-center justify-center">
                    <Typography
                      variant="small"
                      className="font-normal w-fit dark:text-white "
                    >
                      {firstName}
                    </Typography>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    className="font-normal dark:text-white "
                  >
                    {role || ""}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-center">
                    <Link to={`/admin/users/${_id}`}>
                      <Button
                        size="sm"
                        className="hover:shadow-none shadow-none "
                      >
                        View
                      </Button>
                    </Link>
                    <Link to={`/admin/users/edit/${_id}`}>
                      <Button
                        size="sm"
                        className="hover:shadow-none shadow-none "
                      >
                        Edit
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        size="sm"
                        className="hover:shadow-none shadow-none "
                        disabled={
                          email == "mohamed@mohamed.com" ||
                          email == "heshamkhalil1988@gmail.com"
                        }
                        color="red"
                        onClick={() => deleteUserById(image, _id)}
                      >
                        Delete
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        size="sm"
                        className="hover:shadow-none shadow-none w-32 "
                        color={role === "admin" ? "blue-gray" : "green"}
                        onClick={() => changeUserRole(_id)}
                        disabled={
                          email == "mohamed@mohamed.com" ||
                          email == "heshamkhalil1988@gmail.com"
                        }
                      >
                        {role == "admin" ? "Remove Admin" : "Make Admin"}
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default UserTable;
