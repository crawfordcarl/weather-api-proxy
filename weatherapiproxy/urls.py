from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^location/$', views.default_location, name='default_location'),
    url(r'^location/([\w\d]+)/$', views.has_location, name='has_location'),
    url(r'^location/([\w\d]+)/start/(\d+)/$', views.date_start, name='date_start'),
    url(r'^location/([\w\d]+)/start/(\d+)/end/(\d+)/$', views.date_end, name='date_end'),
    url(r'^.*/$', views.api, name='api'),
]
