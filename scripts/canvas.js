const utils = {
    writeTextCenter(ctx, text, x, y) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillText(text, x, y);
    }
}

function vh_to_px(vh) {
    return document.documentElement.clientHeight * (vh / 100);
}

function vw_to_px(vw) {
    return document.documentElement.clientWidth * (vw / 100);
}

class tiNode {
    parent = null;
    id = null;

    constructor( x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.dx = 0;
        this.dy = 0;
    }

    hasParent() {
        return this.parent !== null
    }

    setParent(parent, id) {
        if (this.hasParent()) parent.remove(this.id)

        this.parent = parent

        this.dx = this.parent.x;
        this.dy = this.parent.y;
        this.id = id
    }

    refresh() {
        if (!this.hasParent) return
        this.parent.refresh(this);
    }

    draw(ctx) {}

    move(x, y) {
        this.x += x
        this.y += y

        this.refresh()
    }

    moveTo(x, y) {
        this.x = x
        this.y = y

        this.refresh()
    }
}

class tiGroup extends tiNode {
    children = [];

    constructor(x, y) {
        super(x, y);
    }

    draw(ctx) {
        for (const child of this.children) {
            child.draw(ctx);
        }
    }

    add(...nodes) {
        for (const node of nodes) {
            if (!node instanceof tiNode) throw new Error("Need to be a tiNode object as parameter");
            let id = this.children.push(node) - 1;
            node.setParent(this, id);
        }

        this.refresh();
    }

    remove(id) {
        this.children.slice(id, 1);
        this.refresh();
    }

    clear() {
        this.children = [];
    }
}

class tiPercent {
    static percent = (m, v) => {return m / 100 * v}
    static vh = (m, v) => {return v / 100 * document.documentElement.clientHeight;}

    constructor(parent, unit, value) {
        this.p = parent;
        this.u = unit;
        this.v = value;
    }

    toPX() {
        return this.u(this.p.width, this.v);
    }
}

class tiCanvas extends tiGroup {
    constructor(canvasElement) {
        super();

        this.c = canvasElement;
        this.ctx = this.c.getContext('2d');
    }

    erase() {
        this.ctx.save();

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);

        this.ctx.restore();
    }

    refreshSize() {
        this.c.width = this.c.clientWidth;
        this.c.height = this.c.clientHeight;
    }

    refresh() {
        this.erase();
        this.draw(this.ctx);
    }
}


class tiText extends tiNode {
    constructor(conf) {
        super(conf.x, conf.y);
        
        this.text = conf.text;
        this.fill = conf.fill || true;
        this.fillColor = conf.fillColor || "#000";
        this.stroke = conf.stroke || false;
        this.strokeColor = conf.strokeColor || "#000";
        this.strokeWidth = conf.strokeWidth || 1;
        this.textFont = `${conf.weight || ''} ${conf.size || 10}pt ${conf.police || "sans-serif"}`;
        this.textDirection = conf.textDirection || "ltr";
        this.textAlign = conf.textAlign || "center";
        this.textBaseline = conf.textBaseline || "middle";
        this.backgroundColor = conf.backgroundColor || "transparent";
        this.background = conf.background || false;
    }

    draw(ctx) {
        ctx.textAlign = this.textAlign
        ctx.font = this.textFont;
        ctx.textBaseline = this.textBaseline

        if (this.stroke) {
            ctx.lineWidth = this.strokeWidth;
            ctx.strokeStyle = this.strokeColor;
            ctx.strokeText(
                this.text, 
                this.dx + this.x, 
                this.dy + this.y
            )
        }
        if (this.fill) {
            ctx.fillStyle = this.fillColor;
            ctx.fillText(
                this.text, 
                this.dx + this.x, 
                this.dy + this.y
            )
        }
    }
}


class tiTextArea extends tiText {
    constructor(conf) {
        super(conf);

        this.lineHeight = conf.lineHeight || 24;
        this.width = conf.width || 400;
    }

    draw(ctx) {
        ctx.textAlign = 'left';
        ctx.font = this.textFont;
        ctx.fillStyle = this.fillColor;

        
        let breaks = this.text.split('\n');
        let liney = this.y;
        let line = '';
        
        for (let brk of breaks) {
            let words = brk.split(' ');
            line = '';

            for(let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + ' ';
    
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;
    
                if (testWidth > this.width && n > 0) {
                    ctx.fillText(line, this.x, liney);
    
                    line = words[n] + ' ';
                    liney += this.lineHeight;
                }
                else {
                    line = testLine;
                }
            }

            ctx.fillText(line, this.x, liney);
            liney += this.lineHeight;
        }

    }
}


class tiRect extends tiNode {
    constructor(conf) {
        super(conf.x, conf.y);

        this.w = conf.w || 1;
        this.h = conf.h || 1;
        this.fillColor = conf.fillColor || "#fff";
        this.stroke = conf.stroke || false;
        this.strokeColor = conf.strokeColor || "#000";
        this.strokeWidth = conf.strokeWidth || 1;
        this.borderRadius = conf.borderRadius || 0;
    }

    draw(ctx) {
        ctx.fillStyle = this.fillColor;
        ctx.beginPath();
        ctx.roundRect(
            this.dx + this.x, 
            this.dy + this.y,
            this.w,
            this.h,
            this.borderRadius
        )
        ctx.fill ()
        if (this.stroke) {
            ctx.lineWidth = this.strokeWidth;
            ctx.strokeStyle = this.strokeColor;
            ctx.stroke();
        }
    }
}

class tiCircle extends tiNode {
    constructor(conf) {
        super(conf.x, conf.y);

        this.r = conf.radius || 1;
        this.fillColor = conf.fillColor || "#fff";
        this.stroke = conf.stroke || false;
        this.strokeColor = conf.strokeColor || "#000";
        this.strokeWidth = conf.strokeWidth || 1;
    }

    draw(ctx) {
        ctx.fillStyle = this.fillColor;
        ctx.beginPath();
        ctx.ellipse(
            this.dx + this.x, 
            this.dy + this.y,
            this.r,
            this.r, Math.PI / 4, 0, 2 * Math.PI
        )
        ctx.fill ()
        if (this.stroke) {
            ctx.lineWidth = this.strokeWidth;
            ctx.strokeStyle = this.strokeColor;
            ctx.stroke();
        }
    }
}

// class tiEllipse extends tiNode {
//     constructor(conf) {
//         super(conf.x, conf.y);

//         this.w = conf.w || 1;
//         this.h = conf.h || 1;
//         this.fillColor = conf.fillColor || "#fff";
//         this.stroke = conf.stroke || false;
//         this.strokeColor = conf.strokeColor || "#000";
//         this.borderRadius = conf.borderRadius || 0;
//     }

//     draw(ctx) {
//         ctx.fillStyle = this.fillColor;
//         ctx.beginPath();
//         ctx.roundRect(
//             this.dx + this.x, 
//             this.dy + this.y,
//             this.w,
//             this.h,
//             this.borderRadius
//         )
//         ctx.fill ()
//         if (this.stroke) {
//             ctx.strokeStyle = this.strokeColor;
//             ctx.stroke();
//         }
//     }
// }