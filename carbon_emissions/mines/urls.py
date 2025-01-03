from django.urls import path
from .views import EmissionFactorsView, CarbonCreditsView, AfforestationPlansView
from .views import (
    EmissionFactorListView,
    CarbonCreditRateListView,
    AfforestationPlanListView
)
from .views import EmissionEstimationView
from .views import EmissionVisualizationView

urlpatterns = [
    path('api/emission-factors/', EmissionFactorListView.as_view(), name='emission_factors_list'),
    path('api/carbon-credits/', CarbonCreditRateListView.as_view(), name='carbon_credits_list'),
    path('api/afforestation-plans/', AfforestationPlanListView.as_view(), name='afforestation_plans_list'),
    path('api/emission-estimation/', EmissionEstimationView.as_view(), name='emission_estimation'),
    path('api/emissions-visualization/', EmissionVisualizationView.as_view(), name='emissions_visualization'),
    # path('dashboard/', dashboard, name='dashboard'),
    # path('download-report/', download_report, name='download_report'),
]
