$(document).on('click', 'a.good', function()
{
	if ($(this).data('disabled') == true)
		return false;

	var id = $(this).data('id')
	var shamailId = $(this).data('shamail_id');

	var count = parseInt($(this).find('span').text());

	$(this).find('span').text(count + 1);
	$(this).data('disabled', true);

	var data = new FormData();

	if (id != '')
		data.append('id', id);

	data.append('shamail_id', shamailId);

	$.ajax({
		type: 'POST',
		url: '/rest/good/increment.json',
		cache: false,
		processData: false,
		contentType: false,
		data: data,
		success: function(json)
		{
			;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown)
		{
			;
		}
	});

	return false;
});
