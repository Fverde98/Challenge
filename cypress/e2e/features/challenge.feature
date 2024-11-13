
Feature: OrangeHRM Login and Add Employee 
  
Background: (Repeats on all scenarios)
    Scenario: Ingresar al login OrangeHRM
    Given Abrir la pagina OrangeHRM 
    When ingresar el username "Admin"
    And ingresar password "admin123"
    And Dar click al boton

 Scenario: Agregar un nuevo empleado
    And Estoy en la página de lista de empleados
    When Click al boton de agregar
    And Ingreso el primer nombre "Fernando"
    And Ingreso el segundo nombre "luis"
    And Ingreso el apellido "verde"
    Then Clickeo en el botón 
    
 Scenario: Buscar empleado
 And Consultar empleado creado
 When Ingreses el id del empleado '0423'
 Then Clickeo en el botón buscar