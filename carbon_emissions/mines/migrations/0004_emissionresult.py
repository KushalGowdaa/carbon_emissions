# Generated by Django 5.1.3 on 2024-11-24 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mines', '0003_afforestationplan_carboncreditrate_emissionfactor'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmissionResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coal_production', models.FloatField()),
                ('methane_emission_factor', models.FloatField()),
                ('methane_emissions', models.FloatField()),
                ('methane_emissions_co2e', models.FloatField()),
                ('co2_emissions', models.FloatField()),
                ('total_emissions', models.FloatField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
