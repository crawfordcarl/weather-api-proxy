from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^api/', include('weatherapiproxy.urls')),
    url(r'^admin/', admin.site.urls),
]
