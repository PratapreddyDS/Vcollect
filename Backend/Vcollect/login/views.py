from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from .models import Registration

def validate(request):
    if request.method == "GET":
        # Process the GET request
        # ...

        # sample_user = {'register_id':'12673808AB','username':'npratapreddy954@gmail.com','password':'Charfield','role':'Customer'}
        # data = Registration.objects.create(**sample_user)
        # print(data)
        # Return an HttpResponse object with a status of 200
        return HttpResponse("Success", status=200)



