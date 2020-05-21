import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'landing-screen',
    loadChildren: () =>
      import('./pages/prelogin/landing-screen/landing-screen.module').then((m) => m.LandingscreenPageModule),
  },
  {
    path: 'get-more-info',
    loadChildren: () =>
      import('./pages/prelogin/get-more-info/get-more-info.module').then((m) => m.GetmoreinfoPageModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then((m) => m.ClientsPageModule),
  },
  {
    path: 'leads',
    loadChildren: () => import('./pages/leads/leads.module').then((m) => m.LeadsPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/prelogin/forgot-password/forgot-password.module').then((m) => m.ForgotpasswordPageModule),
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () =>
      import('./pages/terms-and-conditions/terms-and-conditions.module').then((m) => m.TermsAndConditionsPageModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./pages/prelogin/privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyPageModule),
  },
  {
    path: 'reset-password/:email',
    loadChildren: () =>
      import('./pages/prelogin/reset-password/reset-password.module').then((m) => m.ResetPasswordPageModule),
  },
  {
    path: 'become-beekee-pro',
    loadChildren: () =>
      import('./pages/prelogin/become-beekee-pro/become-beekee-pro.module').then((m) => m.BecomeBeekeeProPageModule),
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./pages/manage-profile/my-profile/my-profile.module').then((m) => m.MyProfilePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
