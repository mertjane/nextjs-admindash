import React, { useEffect, useState } from "react";
import Loading from "./Loading";

type Employee = {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

const TableWrapper = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/employee")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="responsive-table-container">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <table className="w-full border-collapse bg-neutral-50 h-fit p-4 rounded-xl">
          <thead>
            <tr>
              <th className="table-head">#ID</th>
              <th className="table-head">Username</th>
              <th className="table-head">Email</th>
              <th className="table-head">Password</th>
              <th className="table-head">CreatedAt</th>
              <th className="table-head">UpdatedAt</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee) => (
              <tr key={employee.id}>
                <td className="table-body">{employee.id}</td>
                <td className="table-body">{employee.username}</td>
                <td className="table-body">{employee.email}</td>
                <td className="table-body">{employee.password}</td>
                <td className="table-body">
                  {new Date(employee.createdAt).toLocaleDateString()}
                </td>
                <td className="table-body">
                  {new Date(employee.updatedAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableWrapper;
