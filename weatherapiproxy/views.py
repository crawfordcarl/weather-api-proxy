from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime, timedelta
import requests
import os
import ConfigParser

apikey = '3569cf2928bc4988b27144752160611'

def index(request):
    return render(request, 'weatherapiproxy/index.html')

def api(request):
    return HttpResponse(request.get_full_path())

def default_location(request):
    payload = {
        'q': 'London',
        'dt': datetime.today().strftime('%Y-%m-%d'),
        'key': apikey
    }
    
    r = requests.get('http://api.apixu.com/v1/history.json', params=payload)
    return HttpResponse(r.text)

def has_location(request, location):
    return HttpResponse(location)

def date_start(request, location, start):
    return HttpResponse(start)

def date_end(request, location, start, end):
    return HttpResponse(end)
