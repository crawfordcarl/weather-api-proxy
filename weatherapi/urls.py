from django.conf.urls import include, url
from django.contrib import admin
from weatherapiproxy.views import index as entry_view

urlpatterns = [
    url(r'^api/', include('weatherapiproxy.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', entry_view),
]
