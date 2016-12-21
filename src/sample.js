let a = [{name : {name : 'hiiiii'}}];
      // a.name = ['abc'];
      console.log(a[0].name);
      let b = fromJS(a[0]);
      // let d = a.pop('0')
      console.log(b.toJS())
      // console.log(d.toJS())
      console.log(b.get('name'));
      let c = b.set('name', 'xyz');
      console.log(b.get('name'));
      console.log(c.get('name'))
      console.log(c.toJS());