package com.venkatesh.Springdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.venkatesh.Springdemo.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
