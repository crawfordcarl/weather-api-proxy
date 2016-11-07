from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime, timedelta
import requests
import os
import ConfigParser

apikey = '3569cf2928bc4988b27144752160611'
apixu_url = 'http://api.apixu.com/v1/history.json'

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
    
    r = requests.get(apixu_url, params=payload)
    return HttpResponse(r.text)

def has_location(request, location):
    payload = {
	'q': location,
        'dt': datetime.today().strftime('%Y-%m-%d'),
        'key': apikey
    }
    r = requests.get(apixu_url, params=payload)
    return HttpResponse(r.text)

def date_start(request, location, start):
    date_start = datetime.fromtimestamp(float(start))
    payload = {
        'q': location,
        'dt': date_start.strftime('%Y-%m-%d'),
        'key': apikey
    }
    r = requests.get(apixu_url, params=payload)
    return HttpResponse(r.text)

def date_end(request, location, start, end):
    return HttpResponse('The Apixu API doesn\'t support end dates - see Readme on github')
