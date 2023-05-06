# Generated by Django 4.1.7 on 2023-04-16 15:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Customer",
            fields=[
                ("id", models.IntegerField(primary_key=True, serialize=False)),
                ("ssn", models.CharField(max_length=9)),
                ("last_name", models.CharField(max_length=40)),
                ("full_name", models.CharField(max_length=40)),
                ("income_per_annum", models.IntegerField()),
                (
                    "profession",
                    models.CharField(
                        choices=[
                            ("Student", "Student"),
                            ("Self Employed", "Self Employed"),
                            ("Employee", "Employee"),
                            ("Others", "Others"),
                        ],
                        max_length=20,
                    ),
                ),
                ("age", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Employee",
            fields=[
                (
                    "employee_id",
                    models.CharField(max_length=40, primary_key=True, serialize=False),
                ),
                ("last_name", models.CharField(max_length=40)),
                ("first_name", models.CharField(max_length=40)),
                ("role", models.CharField(max_length=40)),
                ("join_date", models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name="Loan",
            fields=[
                ("loan_id", models.IntegerField(primary_key=True, serialize=False)),
                ("requested_amount", models.IntegerField()),
                ("sanctioned_amount", models.IntegerField()),
                ("installments", models.IntegerField()),
                ("loan_credited_date", models.DateTimeField()),
                (
                    "approved_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="login.employee"
                    ),
                ),
                (
                    "requested_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="login.customer"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Registration",
            fields=[
                (
                    "register_id",
                    models.CharField(max_length=40, primary_key=True, serialize=False),
                ),
                ("username", models.CharField(max_length=40)),
                ("password", models.CharField(max_length=40)),
                ("role", models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name="Transaction",
            fields=[
                (
                    "transaction_id",
                    models.IntegerField(primary_key=True, serialize=False),
                ),
                ("paid_date", models.DateTimeField()),
                ("paid_amount", models.IntegerField()),
                ("amount_due", models.BooleanField()),
                (
                    "loan",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="login.loan"
                    ),
                ),
                (
                    "paid_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="login.customer"
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="employee",
            name="registration",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="login.registration"
            ),
        ),
        migrations.AddField(
            model_name="customer",
            name="registration",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="login.registration"
            ),
        ),
        migrations.CreateModel(
            name="AgentReview",
            fields=[
                (
                    "agent_id",
                    models.CharField(max_length=40, primary_key=True, serialize=False),
                ),
                ("next_due_date", models.DateTimeField()),
                ("remainder_sent", models.BooleanField()),
                (
                    "loan",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="login.loan"
                    ),
                ),
                (
                    "review_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="login.employee"
                    ),
                ),
            ],
        ),
    ]