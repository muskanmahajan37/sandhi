/***********************************************************************
 * Stats registry data structure
 **********************************************************************/
var GrasStatsRegistry = function()
{
    this.ids = new Array();
    this.enables = new Array();
    this.history = new Array();
    this.block_enables = new Array();
    this.overall_rate = 2.0;
    this.overall_active = true;
    this.block_charts = new Array();
}

GrasStatsRegistry.prototype.appendPoint = function(point)
{
    this.history.push(point);
    var self = this;
    if (this.history.length == 1)
    {
        $('block', this.history[0]).each(function()
        {
            self.ids.push($(this).attr('id'));
        });
    }
};

GrasStatsRegistry.prototype.getBlockIds = function()
{
    var ids = new Array();
    $('block', this.history[0]).each(function()
    {
        ids.push($(this).attr('id'));
    });
    return ids;
};
