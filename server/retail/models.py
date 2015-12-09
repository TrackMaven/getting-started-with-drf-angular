from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


class Chain(models.Model):
    """ High-level retail chain model"""
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    slogan = models.CharField(max_length=500)
    founded_date = models.CharField(max_length=500)
    website = models.URLField(max_length=500)


class Store(models.Model):
    """ Store location model.  Foreign key to Chain."""
    chain = models.ForeignKey(Chain)
    number = models.CharField(max_length=20)
    address = models.CharField(max_length=1000)
    opening_date = models.DateTimeField(default=timezone.now)

    # Business hours in a 24 hour clock.  Default 8am-5pm.
    business_hours_start = models.IntegerField(
        default=8,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(23)
        ]
    )
    business_hours_end = models.IntegerField(
        default=17,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(23)
        ]
    )


class Employee(models.Model):
    """ Location employee model.  Foreign key to Store."""
    store = models.ForeignKey(Store)
    number = models.CharField(max_length=20)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    hired_date = models.DateTimeField(default=timezone.now)
