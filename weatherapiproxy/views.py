from django.http import HttpResponse
import requests

apikey = 'a6d4742e75e622f14d2625e1c86fc4bb'

def index(request):
    return HttpResponse("Weather API default view")

def api(request):
    return HttpResponse(request.get_full_path())

def default_location(request):
    payload = {'q': 'London', 'APPID': apikey}
    r = requests.get('http://api.openweathermap.org/data/2.5/weather', params=payload)
    return HttpResponse(r.text)

def has_location(request, location):
    return HttpResponse(location)

def date_start(request, location, start):
    return HttpResponse(start)

def date_end(request, location, start, end):
    return HttpResponse(end)
