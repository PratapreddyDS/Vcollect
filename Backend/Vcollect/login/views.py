from django.shortcuts import render

# Create your views here.

def validate(request,inputdetails):
    if request.method == "POST":
        # post the data into the database
        print(inputdetails)

        status = 200

        return status



