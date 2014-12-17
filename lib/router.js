Router.configure({
  layoutTemplate:'layout'
  
});

Router.map(function() {
   this.route('matchList',{
     path:'/'
   });
  
  this.route('homePage', {
    path:'/home'
  });
  
  this.route('matchPage', {
    path:'/matches/:_id',
    data:function(){
      return Matches.findOne(this.params._id);
    }
  });
  
});