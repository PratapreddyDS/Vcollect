from django.db import models

# Create your models here.


from django.db import models

class Registration(models.Model):
    register_id = models.CharField(max_length=40, primary_key=True)
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    role = models.CharField(max_length=40)

class Customer(models.Model):
    id = models.IntegerField(primary_key=True)
    ssn = models.CharField(max_length=9)
    last_name = models.CharField(max_length=40)
    full_name = models.CharField(max_length=40)
    income_per_annum = models.IntegerField()
    profession = models.CharField(max_length=20, choices=(('Student', 'Student'), ('Self Employed', 'Self Employed'), ('Employee', 'Employee'), ('Others', 'Others')))
    age = models.IntegerField()
    registration = models.ForeignKey(Registration, on_delete=models.CASCADE)

class Employee(models.Model):
    employee_id = models.CharField(max_length=40, primary_key=True)
    last_name = models.CharField(max_length=40)
    first_name = models.CharField(max_length=40)
    role = models.CharField(max_length=40)
    join_date = models.DateTimeField()
    registration = models.ForeignKey(Registration, on_delete=models.CASCADE)

class Loan(models.Model):
    loan_id = models.IntegerField(primary_key=True)
    requested_by = models.ForeignKey(Customer, on_delete=models.CASCADE)
    requested_amount = models.IntegerField()
    sanctioned_amount = models.IntegerField()
    approved_by = models.ForeignKey(Employee, on_delete=models.CASCADE)
    installments = models.IntegerField()
    loan_credited_date = models.DateTimeField()

class Transaction(models.Model):
    transaction_id = models.IntegerField(primary_key=True)
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    paid_by = models.ForeignKey(Customer, on_delete=models.CASCADE)
    paid_date = models.DateTimeField()
    paid_amount = models.IntegerField()
    amount_due = models.BooleanField()

class AgentReview(models.Model):
    agent_id = models.CharField(max_length=40, primary_key=True)
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    next_due_date = models.DateTimeField()
    remainder_sent = models.BooleanField()
    review_by = models.ForeignKey(Employee, on_delete=models.CASCADE)
