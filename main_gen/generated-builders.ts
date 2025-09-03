import * as Gen from "./trial";

export class PostBuilder{
    private post: Partial<Gen.Post>={};

    setId(id:string):this{
        this.post.id=id;
        return this;
    }

    setUsname(usname:string):this{
        this.post.usname=usname;
        return this;
    }

    setContent(content:string):this{
        this.post.content=content;
        return this;
    }

    setTimestamp(timestamp:number):this{
        this.post.timestamp=timestamp;
        return this;
    }

    build(): Gen.Post {
        return Gen.Post.fromPartial(this.post);
    }
}

export class UserBuilder{
    private user: Partial<Gen.User>={};

    setId(id:string):this{
        this.user.id=id;
        return this;
    }

    setUsname(usname:string):this{
        this.user.usname=usname;
        return this;
    }

    setAge(age:number):this{
        this.user.age=age;
        return this;
    }

    setAbout(about:string):this{
        this.user.about=about;
        return this;
    }

    setStatus(status:Gen.ActStatus):this{
        this.user.status=status;
        return this;
    }

    setPostlist(postlist:Gen.Post[]):this{
        this.user.postlist=postlist;
        return this;
    }

    setFollowercount(followercount:number):this{
        this.user.followercount=followercount;
        return this;
    }

    setEmail(email:string):this{
        this.user.email=email;
        return this;
    }

    setPhone(phone:string):this{
        this.user.phone=phone;
        return this;
    }

    build(): Gen.User {
        return Gen.User.fromPartial(this.user);
    }
}

export class UserlistBuilder{
    private userlist: Partial<Gen.Userlist>={};

    setUsers(users:Gen.User[]):this{
        this.userlist.users=users;
        return this;
    }

    build(): Gen.Userlist {
        return Gen.Userlist.fromPartial(this.userlist);
    }
}

