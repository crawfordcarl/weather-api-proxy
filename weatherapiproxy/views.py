from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime, timedelta
import requests

apikey = 'a6d4742e75e622f14d2625e1c86fc4bb'

def index(request):
    return render(request, 'weatherapiproxy/index.html')

def api(request):
    return HttpResponse(request.get_full_path())

def default_location(request):
    start = datetime.now()
    end = datetime.now() - timedelta(days=1)
    payload = {
        'q': 'London,UK',
        'type': 'hour',
        'start': start,
        'end': end,
        'APPID': apikey
    }
    r = requests.get('http://history.openweathermap.org/data/2.5/history/city', params=payload)
    return HttpResponse(r.text)

def has_location(request, location):
    return HttpResponse(location)

def date_start(request, location, start):
    return HttpResponse(start)

def date_end(request, location, start, end):
    return HttpResponse(end)
